using Flurl;
using Flurl.Http;
using Microsoft.Extensions.Configuration;
using Countries.Api.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Countries.Api.Clients
{
    public class RestCountriesClient : IRestCountriesClient
    {
        private readonly string _baseUrl;

        public RestCountriesClient(IConfiguration configuration)
        {
            this._baseUrl = configuration["RestCountriesUrl"];
        }
        public async Task<List<T>> GetAll<T>() where T: Country
        {
            try
            {
                return await this._baseUrl
                    .AppendPathSegments("rest", "v2", "all")
                    .SetQueryParam("fields", GetFieldsToFetch())
                    .GetJsonAsync<List<T>>();
            }
            catch (Exception ex)
            {
                Console.Write(ex);
            }

            return new List<T>();
        }

        private static string GetFieldsToFetch()
        {
            var fields = new List<string>
            {
                "alpha3Code",
                "name",
                "flag",
                "population",
                "timezones",
                "currencies",
                "languages",
                "capital",
                "borders"
            };
            return string.Join(';', fields);
        }
    }
}