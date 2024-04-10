import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { HOTELS } from '../mock-hotels';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  hotels = HOTELS;
}
