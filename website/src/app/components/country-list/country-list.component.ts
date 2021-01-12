import { Component } from '@angular/core';
import { CountriesApiService } from 'src/app/services';
import { CountryListViewModel } from 'src/app/types';

@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.scss']
  })
  export class CountryListComponent {

    content: CountryListViewModel;
    currentPage: number;
    loading: boolean;

    constructor(private readonly apiService: CountriesApiService) {
        this.fetchData();
    }

    pageChange(page: number): void {
        this.fetchData(page);
    }

    private fetchData(page?: number): void {
        this.loading = true;
        this.apiService.getCountries(page)
                .subscribe(vm => {
                    this.content = vm;
                    this.loading = false;
                });
    }
  }
