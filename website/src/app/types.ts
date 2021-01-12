export interface CountryListViewModel {
    countries: CountryViewModel[];
    currentPage: number;
    pageCount: number;
}

export interface CountryViewModel {
    name: string;
    flagUrl: string;
    population: number;
    timeZones: string[];
    currencies: string[];
    languages: string[];
    capitalCity: string;
    bordersWith: string[];
}
