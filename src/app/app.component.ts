import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { HotelsService } from './services/hotels.service';
import { Store } from '@ngrx/store';
import { HotelsActions } from './state/hotels.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    protected keycloak: KeycloakService,
    private router: Router,
    private hotelsService: HotelsService,
    private store: Store,
  ) {}

  ngOnInit() {
    this.hotelsService.getHotels()
      .subscribe(hotels => {
        this.store.dispatch(HotelsActions.loadHotels({ hotels }));
      })
  }

  login() {
    this.keycloak.login({
      redirectUri: `${window.location.origin}${this.router.url}`
    });
  }

  logout() {
    this.keycloak.logout(window.location.origin)
  }
}
