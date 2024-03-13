import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    let result: Observable<Country[]> = this.httpClient
      .get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );

    return result;
  }

  searchCountryByAlphacode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;

    let result: Observable<Country | null> = this.httpClient
      .get<Country[]>(url)
      .pipe(
        map((countries) => (countries.length > 0 ? countries[0] : null)),
        catchError(() => of(null))
      );

    return result;
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;

    let result: Observable<Country[]> = this.getCountriesRequest(url);

    return result;
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;

    let result: Observable<Country[]> = this.getCountriesRequest(url);

    return result;
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;

    let result: Observable<Country[]> = this.getCountriesRequest(url);

    return result;
  }
}
