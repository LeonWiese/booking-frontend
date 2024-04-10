import { Component, Input } from '@angular/core';
import { Hotel } from '../models';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent {
  @Input() hotel?: Hotel;
}
