import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { initializeKeycloak } from './auth';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { provideStore } from '@ngrx/store';
import { hotelsFeatureKey, hotelsReducer } from './state/hotels.reducer';
import { provideEffects } from '@ngrx/effects';
import { HotelsEffects } from './state/hotels.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

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
    provideEffects(
      HotelsEffects,
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
