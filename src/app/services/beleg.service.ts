import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Beleg } from '../models/beleg.model';

const baseUrl = "http://localhost:8080/api/belege"
@Injectable({
  providedIn: 'root'
})
export class BelegService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Beleg[]> {
    return this.http.get<Beleg[]>(baseUrl)
    .pipe(
      catchError(this.handleError<Beleg[]>('getAll',[])));
  }

  getBeleg(id: number) : Observable<Beleg> {
    return this.http.get(`${baseUrl}/${id}`)
    .pipe(
      catchError(this.handleError<Beleg>('getBeleg'))); 
  }

  getChartData() : Observable<any> {
    return this.http.get(`${baseUrl}/charts`)
    .pipe(
      catchError(this.handleError<any>('getChartData')));
    
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
