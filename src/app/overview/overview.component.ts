import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { Hotel } from '../models';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  hotels: Hotel[] = [];

  addHotelForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    location: new FormControl('', [
      Validators.required
    ]),
  });

  showAddHotelForm = false;

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

  saveHotel() {
    const newHotel = this.addHotelForm.value;
    console.log('newHotel:', newHotel);
  }
}
