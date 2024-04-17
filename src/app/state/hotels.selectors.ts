import { createFeatureSelector, createSelector } from '@ngrx/store';
import { hotelsFeatureKey, HotelsState } from './hotels.reducer';

export const selectAllHotels = createFeatureSelector<HotelsState>(hotelsFeatureKey);

export const selectHotel = (hotelId: string) => createSelector(
  selectAllHotels,
  (hotels) => hotels.find(hotel => hotel.id === hotelId),
);
