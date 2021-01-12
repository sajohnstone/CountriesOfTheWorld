using Countries.Api.ViewModels;
using System.Threading.Tasks;

namespace Countries.Api.Services
{
  public interface ICountryInfoService
  {
    Task<CountryListViewModel> GetCountries(int page = 1);
  }
}
