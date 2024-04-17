import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models';
import { AsyncPipe, Location, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectHotel } from '../state/hotels.selectors';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    UpperCasePipe,
    AsyncPipe,
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css',
})
export class HotelComponent implements OnInit {
  hotel$ = new Observable<Hotel | undefined>();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    const hotelId = this.route.snapshot.paramMap.get('id');
    if (hotelId) {
      this.hotel$ = this.store.select(selectHotel(hotelId));
    }
  }

  back() {
    this.location.back();
  }
}










