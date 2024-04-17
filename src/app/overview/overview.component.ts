import { Component } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { HotelWithoutId } from '../models';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListItemComponent } from './list-item/list-item.component';
import { KeycloakService } from 'keycloak-angular';
import { Store } from '@ngrx/store';
import { selectAllHotels } from '../state/hotels.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    ListItemComponent,
    AsyncPipe,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  hotels$ = this.store.select(selectAllHotels);

  addHotelForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    location: new FormControl('', [
      Validators.required,
    ]),
  });

  showAddHotelForm = false;

  constructor(
    private hotelsService: HotelsService,
    protected keycloak: KeycloakService,
    private store: Store,
  ) {
  }

  saveHotel() {
    const newHotel: HotelWithoutId = {
      name: this.addHotelForm.value.name ?? '',
      location: this.addHotelForm.value.location ?? '',
    };
    this.hotelsService.addHotel(newHotel)
      .subscribe(() => {
        this.addHotelForm.reset();
      });
  }

  deleteHotel(id: string) {
    this.hotelsService.deleteHotel(id)
      .subscribe(() => {
      });
  }
}









