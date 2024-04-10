import { Component } from '@angular/core';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  hotel: Hotel = {
    id: '123',
    name: 'Parkhotel',
    location: 'Bielefeld',
  };
}
