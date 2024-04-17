import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models';
import { ReservationsService } from '../services/reservations.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-reservations',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.css',
})
export class MyReservationsComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationsService: ReservationsService) {
  }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations() {
    this.reservationsService.getUserReservations()
      .subscribe(reservations => {
        this.reservations = reservations;
      });
  }
}
