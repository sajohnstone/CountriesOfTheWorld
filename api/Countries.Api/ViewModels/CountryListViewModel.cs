using System.Collections.Generic;

namespace Countries.Api.ViewModels
{
  public class CountryListViewModel
  {
    public List<CountryViewModel> Countries { get; set; }
    public int CurrentPage { get; set; }
    public int PageCount { get; set; }
  }
}
