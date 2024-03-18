import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-storage.type';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStorage: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    let result: Observable<Country[]> = this.httpClient
      .get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
        //delay(400)
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

    let result: Observable<Country[]> = this.getCountriesRequest(url)
    .pipe(
      tap((countries) => (this.cacheStorage.byCapital = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );

    return result;
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;

    let result: Observable<Country[]> = this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStorage.byCountries = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );

    return result;
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;

    let result: Observable<Country[]> = this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStorage.byRegion = {region, countries}),
      tap(() => this.saveToLocalStorage())
      );

    return result;
  }

  private saveToLocalStorage(): void{
    	localStorage.setItem('cacheStore', JSON.stringify(this.cacheStorage));
  }

  private loadFromLocalStorage(): void{
    	if(!localStorage.getItem('cacheStore')) return;

      this.cacheStorage = JSON.parse(localStorage.getItem('cacheStore')!);
  }
}
