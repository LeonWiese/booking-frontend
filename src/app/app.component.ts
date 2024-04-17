import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Store } from '@ngrx/store';
import { applicationInitialized} from './state/hotels.actions';

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
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch(applicationInitialized());
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
