import { Component } from '@angular/core';
import { HOTELS } from '../mock-hotels';
import { HotelComponent } from '../hotel/hotel.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    HotelComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  hotels = HOTELS;
}
