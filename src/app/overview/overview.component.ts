import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { Hotel, HotelWithoutId } from '../models';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    ListItemComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  hotels: Hotel[] = [];

  addHotelForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    location: new FormControl('', [
      Validators.required,
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
    const newHotel: HotelWithoutId = {
      name: this.addHotelForm.value.name ?? '',
      location: this.addHotelForm.value.location ?? '',
    };
    this.hotelsService.addHotel(newHotel)
      .subscribe(() => {
        this.addHotelForm.reset();
        this.getHotels();
      });
  }

  deleteHotel(id: string) {
    this.hotelsService.deleteHotel(id)
      .subscribe(() => {
        this.getHotels();
      });
  }
}









