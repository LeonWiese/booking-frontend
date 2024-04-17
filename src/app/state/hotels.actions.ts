import { createActionGroup, props } from '@ngrx/store';
import { Hotel } from '../models';

export const HotelsActions = createActionGroup({
  source: 'Hotel API',
  events: {
    'Load Hotels': props<{ hotels: Hotel[] }>(),
  },
});
