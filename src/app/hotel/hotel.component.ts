import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models';
import { UpperCasePipe } from '@angular/common';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css',
})
export class HotelComponent implements OnInit {
  hotel?: Hotel;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelsService,
  ) {
  }

  ngOnInit(): void {
    const hotelId = this.route.snapshot.paramMap.get('id');
    if (hotelId) {
      this.getHotel(hotelId);
    }
  }

  getHotel(hotelId: string) {
    this.hotelService.getHotel(hotelId)
      .subscribe(hotel => {
        this.hotel = hotel;
      });
  }
}










