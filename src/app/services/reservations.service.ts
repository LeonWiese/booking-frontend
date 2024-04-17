import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  appUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.appUrl}/reservations`);
  }
}
