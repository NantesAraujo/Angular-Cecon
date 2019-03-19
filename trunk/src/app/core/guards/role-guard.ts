import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private loginService: LoginService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    if (this.loginService.isUsuarioLogado() && expectedRole === 'admin') {
      return true;
    }
    this.router.navigate(['cecon'])
    return false;
  }
}