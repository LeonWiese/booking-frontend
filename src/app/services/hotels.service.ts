import { Injectable } from '@angular/core';
import { Hotel } from '../models';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hotels`);
  }

  getHotel(id: string): Observable<Hotel | undefined> {
    return this.http.get<Hotel>(this.apiUrl + '/hotels/' + id)
      .pipe(
        catchError(this.handleError('getHotel', undefined)),
      );
  }

  private handleError<T>(operation: string, result: T) {
    return (error: unknown): Observable<T> => {
      // TODO: send this error to remote logging infrastructure
      console.error(`${operation} http request failed`, error);

      return of(result);
    };
  }
}










