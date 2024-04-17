import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { HotelWithoutId } from '../models';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListItemComponent } from './list-item/list-item.component';
import { KeycloakService } from 'keycloak-angular';
import { Store } from '@ngrx/store';
import { selectAllHotels } from '../state/hotels.selectors';
import { AsyncPipe } from '@angular/common';
import { HotelsActions } from '../state/hotels.actions';
import { Actions, ofType } from '@ngrx/effects';

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
export class OverviewComponent implements OnInit {
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
    private actions$: Actions,
  ) {
  }

  ngOnInit() {
    this.actions$.pipe(ofType(HotelsActions.addHotel))
      .subscribe(() => {
        this.addHotelForm.reset();
      });
  }

  saveHotel() {
    const newHotel: HotelWithoutId = {
      name: this.addHotelForm.value.name ?? '',
      location: this.addHotelForm.value.location ?? '',
    };
    this.store.dispatch(HotelsActions.postHotelToService({
      partialHotel: newHotel,
    }));
  }

  deleteHotel(hotelId: string) {
    this.store.dispatch(HotelsActions.deleteHotelToService({ hotelId }));
  }
}









