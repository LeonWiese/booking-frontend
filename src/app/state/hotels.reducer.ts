import { Hotel } from '../models';
import { createReducer, on } from '@ngrx/store';
import { HotelsActions } from './hotels.actions';

export const initialState: Hotel[] = [];

export type HotelsState = typeof initialState;

export const hotelsFeatureKey = 'hotels';

export const hotelsReducer = createReducer(
  initialState,
  on(HotelsActions.loadHotels, (_state, payload) => payload.hotels),
  on(HotelsActions.addHotel, (state, { hotel }) => [...state, hotel]),
  on(HotelsActions.deleteHotel, (state, { hotelId }) => state.filter(hotel => hotel.id !== hotelId)),
);
