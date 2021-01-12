import { Component, Input } from '@angular/core';
import { CountryViewModel } from 'src/app/types';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
  })
  export class CountryComponent {
    @Input() country: CountryViewModel;
    showDetails: boolean;

    countryClickHandler(): void {
        this.showDetails = !this.showDetails;
    }
  }
