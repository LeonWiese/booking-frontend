import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { initializeKeycloak } from './auth';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { provideStore } from '@ngrx/store';
import { hotelsFeatureKey, hotelsReducer } from './state/hotels.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      HttpClientModule,
      KeycloakAngularModule,
    ]),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    provideStore({
      [hotelsFeatureKey]: hotelsReducer,
    }),
  ],
};
