import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService,
  ) {
    super(router, keycloak);
  }

  override async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: `${window.location.origin}/${state.url}`,
      });
    }

    const requiredRoles = route.data['roles'];

    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      return true;
    }

    return requiredRoles.every(role => this.roles.includes(role));
  }
}
