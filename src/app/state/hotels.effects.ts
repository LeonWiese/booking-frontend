import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HotelsService } from '../services/hotels.service';
import { applicationInitialized, HotelsActions } from './hotels.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

@Injectable()
export class HotelsEffects {
  constructor(
    private actions$: Actions,
    private hotelsService: HotelsService,
  ) {
  }

  loadHotels$ = createEffect(() => this.actions$.pipe(
    ofType(applicationInitialized),
    exhaustMap(() => this.hotelsService.getHotels()
      .pipe(
        map(hotels => HotelsActions.loadHotels({ hotels })),
        catchError(() => EMPTY),
      )),
  ));
}
