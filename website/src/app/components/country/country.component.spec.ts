import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountriesApiService } from 'src/app/services';
import { MockCountriesApiService } from 'src/app/testing/mock-countries-api.service';
import { CountryComponent } from './country.component';

describe('CountryComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CountryComponent
      ],
      providers: [
        { provide: CountriesApiService, useClass: MockCountriesApiService }
      ]
    }).compileComponents();
  }));

  it('should create component', () => {
    const fixture = TestBed.createComponent(CountryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render name', () => {
    const fixture = TestBed.createComponent(CountryComponent);
    fixture.componentInstance.country = MockCountriesApiService.getMockCountryViewModelObject();
    fixture.detectChanges();
    const expectedCountryName: string = fixture.componentInstance.country.name;

    const countryName: HTMLElement = fixture.debugElement.queryAll(By.css('td'))[1].nativeElement;

    expect(countryName.textContent).toBe(expectedCountryName);
  });

  
  it('should render flag', () => {
    const fixture = TestBed.createComponent(CountryComponent);
    fixture.componentInstance.country = MockCountriesApiService.getMockCountryViewModelObject();
    fixture.detectChanges();
    const expectedFlagUrl: string = fixture.componentInstance.country.flagUrl;

    const flgImg: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;

    expect(flgImg.src).toBe(expectedFlagUrl);
  });

  it('should render details', () => {
    const fixture = TestBed.createComponent(CountryComponent);
    fixture.componentInstance.country = MockCountriesApiService.getMockCountryViewModelObject();
    fixture.componentInstance.countryClickHandler();
    fixture.detectChanges();
    const expectedCapitalCity: string = fixture.componentInstance.country.capitalCity;

    const liElem: HTMLElement = fixture.debugElement.queryAll(By.css('li'))[0].nativeElement;

    expect(liElem.textContent.search(expectedCapitalCity) > 0).toBeTruthy();
  });
});
