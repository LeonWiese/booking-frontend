import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { HotelComponent } from './hotel/hotel.component';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'hotels/:id', component: HotelComponent },
];
