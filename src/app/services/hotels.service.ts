import { Injectable } from '@angular/core';
import { Hotel } from '../models';
import { HOTELS } from '../mock-hotels';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }

  getHotels(): Observable<Hotel[]> {
    return of(HOTELS);
  }
}
