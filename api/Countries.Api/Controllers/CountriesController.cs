using Microsoft.AspNetCore.Mvc;
using Countries.Api.Models;
using Countries.Api.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Countries.Api.Controllers
{
  [ApiController]
  [Route("api")]
  public class CountriesController : ControllerBase
  {
    private readonly ICountryInfoService _countryInfoService;

    public CountriesController(ICountryInfoService countryInfoService)
    {
      _countryInfoService = countryInfoService;
    }

    [HttpGet]
    public ActionResult<string> Get()
    {
      return Ok("All Good");
    }

    [HttpGet("countries")]
    public async Task<ActionResult<List<Country>>> GetAllCountries(int page = 1)
    {
      var result = await this._countryInfoService.GetCountries(page);
      return Ok(result);
    }
  }
}
