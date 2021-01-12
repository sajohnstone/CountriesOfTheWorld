import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { CountryListViewModel, CountryViewModel } from '../types';

@Injectable({
  providedIn: 'root'
})
export class MockCountriesApiService {

  static getMockCountryViewModelObject(): CountryViewModel {
    return {
      name: 'United Kingdom',
      capitalCity: 'London',
      flagUrl: 'http://flagurl/',
      population: 65000000,
      languages: ['English'],
      currencies: ['GBP'],
      timeZones: [],
      bordersWith: []
    };
  }

  public getHealth(): Observable<string> {
    return of('Healthy');
  }

  public getCountries(currentPage: number = 1): Observable<CountryListViewModel> {
    const vm: CountryListViewModel = {
      countries: [MockCountriesApiService.getMockCountryViewModelObject()],
      currentPage,
      pageCount: 10
    };
    return of(vm);
  }
}
