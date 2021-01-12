using Countries.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Countries.Api.Clients
{
    public interface IRestCountriesClient
    {
        Task<List<T>> GetAll<T>() where T : Country;
    }
}
