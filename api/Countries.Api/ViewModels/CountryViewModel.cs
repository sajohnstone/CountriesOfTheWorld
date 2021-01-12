using System.Collections.Generic;

namespace Countries.Api.ViewModels
{
  public class CountryViewModel
  {
    public string Name { get; set; }

    public string FlagUrl { get; set; }

    public int Population { get; set; }

    public List<string> TimeZones { get; set; }

    public List<string> Currencies { get; set; }

    public List<string> Languages { get; set; }

    public string CapitalCity { get; set; }

    public List<string> BordersWith { get; set; }
  }
}
