import { createAction, createActionGroup, props } from '@ngrx/store';
import { Hotel, HotelWithoutId } from '../models';

export const HotelsActions = createActionGroup({
  source: 'Hotel API',
  events: {
    'Load Hotels': props<{ hotels: Hotel[] }>(),
    'Post Hotel to service': props<{ partialHotel: HotelWithoutId }>(),
    'Add Hotel': props<{ hotel: Hotel }>(),
    'Delete Hotel to service': props<{ hotelId: string }>(),
    'Delete Hotel': props<{ hotelId: string }>(),
  },
});

export const applicationInitialized = createAction('[Application] initialized');
