using Countries.Api.Cache;
using Countries.Api.Clients;
using Countries.Api.Models;
using Countries.Api.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Countries.Api.Services
{
    public class CountryInfoService : ICountryInfoService
    {
        private const string AllCountriesCacheKey = "AllCountries";
        private const int PageSize = 20;
        private readonly IRestCountriesClient _restCountriesClient;
        private readonly ILocalCache _localCache;

        public CountryInfoService(IRestCountriesClient restCountriesClient, ILocalCache localCache)
        {
            _restCountriesClient = restCountriesClient;
            _localCache = localCache;
        }

        public async Task<CountryListViewModel> GetCountries(int page = 1)
        {
            var allCountries = this._localCache.Get<List<Country>>(AllCountriesCacheKey);
            if (allCountries == null || !allCountries.Any())
            {
                allCountries = await this._restCountriesClient.GetAll<Country>() ?? new List<Country>();
                this._localCache.Put(AllCountriesCacheKey, allCountries);
            }

            // building paged country list
            var pageCountryList = allCountries
                .OrderBy(c => c.Name)
                .Skip((page - 1) * PageSize)
                .Take(PageSize)
                .Select(country => new CountryViewModel
                {
                    Name = country.Name,
                    CapitalCity = country.Capital,
                    FlagUrl = country.Flag,
                    Population = country.Population,
                    BordersWith = GetBorderCountryNames(allCountries, country.Borders),
                    Currencies = country.Currencies?.Select(cur => cur.Name).ToList(),
                    Languages = country.Languages?.Select(lan => lan.Name).ToList(),
                    TimeZones = country.Timezones
                })
                .ToList();

            var pageCount = allCountries.Count / PageSize;

            return new CountryListViewModel
            {
                Countries = pageCountryList,
                CurrentPage = page,
                PageCount = pageCount > 0 ? pageCount : 1
            };
        }

        private static List<string> GetBorderCountryNames(IEnumerable<Country> allCountries, IEnumerable<string> countryBorders)
        {
            return countryBorders
                ?.Select(border => allCountries.FirstOrDefault(c => c.Alpha3Code == border)?.Name)
                .Where(borderWith => borderWith != null).ToList();
        }
    }
}