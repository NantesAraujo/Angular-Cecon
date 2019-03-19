import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { TokenAuthorization } from '../models/token-authorization.model';
import { Login } from '../models/login.model';
import { EncrypterService } from './encrypter.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private encrypterService: EncrypterService, private router: Router) { }

  tokenAuthorization: TokenAuthorization;

  login(usuarioLogin: Login) {

    //vai lah no gsi buscar o usuario
    let usuarioCriptografado = this.encrypterService.encrypt(usuarioLogin);

    sessionStorage.setItem('cecon.user', usuarioCriptografado)
    this.router.navigate(['home']);
  }

  logout(): void {
    sessionStorage.removeItem("cecon.user");
  }

  isUsuarioLogado() {
    return sessionStorage.getItem("cecon.user") !== undefined && sessionStorage.getItem("cecon.user") !== null;
  }

  getUsuarioLogado() {
    return this.encrypterService.decrypt(sessionStorage.getItem('cecon.user'));
  }
}
