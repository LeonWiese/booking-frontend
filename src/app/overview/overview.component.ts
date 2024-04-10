import { Component, OnInit } from '@angular/core';
import { HotelComponent } from '../hotel/hotel.component';
import { HotelsService } from '../services/hotels.service';
import { Hotel } from '../models';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    HotelComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelsService: HotelsService) {
  }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels() {
    this.hotelsService.getHotels()
      .subscribe(hotels => {
        this.hotels = hotels;
      });
  }
}
