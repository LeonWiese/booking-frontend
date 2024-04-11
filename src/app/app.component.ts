import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    protected keycloak: KeycloakService,
    private router: Router,
  ) {}

  login() {
    this.keycloak.login({
      redirectUri: `${window.location.origin}${this.router.url}`
    });
  }

  logout() {
    this.keycloak.logout(window.location.origin)
  }
}
