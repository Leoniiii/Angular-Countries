import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
    private apiUrl = 'https://restcountries.com/v3.1'
    constructor(private http: HttpClient) { }

    searchCapital(term: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).pipe(
            catchError(error => of([]))
        )
    }

    searchCountry(term: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`).pipe(
            catchError(error => of([]))
        )
    }

    searchRegion(term: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`).pipe(
            catchError(() => of([])
            ))
    }

}