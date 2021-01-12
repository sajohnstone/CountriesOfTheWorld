import { Component } from '@angular/core';
import { CountriesApiService } from './services';
import { take } from 'rxjs/operators';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public faThumbsUp = faThumbsUp;
  public faThumbsDown = faThumbsDown;
  public title = 'Countries of the world';
  public countriesApiIsActive = false;
  public countriesApiActiveIcon = this.faThumbsDown;
  public countriesApiActiveIconColour = 'red';

  constructor(private countriesApiService: CountriesApiService) {
    countriesApiService.getHealth().pipe(take(1))
    .subscribe(
      apiHealth => {
        this.countriesApiIsActive = apiHealth === 'Healthy';
        this.countriesApiActiveIcon = this.countriesApiIsActive
          ? this.faThumbsUp
          : this.faThumbsUp;
        this.countriesApiActiveIconColour = this.countriesApiIsActive
          ? 'green'
          : 'red';
      },
      _ => {
        this.countriesApiIsActive = false;
        this.countriesApiActiveIcon = this.faThumbsDown;
        this.countriesApiActiveIconColour = 'red';
      });
  }
}
