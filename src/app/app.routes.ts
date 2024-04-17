import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { HotelComponent } from './hotel/hotel.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { AuthGuard } from './auth';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'hotels/:id', component: HotelComponent },
  {
    path: 'my-reservations',
    component: MyReservationsComponent,
    canActivate: [AuthGuard],
    data: {
      // hier können zusätzliche rollen definiert werden, die der Nutzer haben muss,
      // damit das Component überhaupt angezeigt wird.
      // Beispiel:
      // roles: ['view-my-reservations'],
      roles: [],
    },
  },
];
