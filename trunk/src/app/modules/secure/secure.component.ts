import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/core/services/login.service';
import { EncrypterService } from 'src/app/core/services/encrypter.service';

@Component({
  selector: 'cecon-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private enc: EncrypterService) { }

  ngOnInit() {
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['cecon']);
  }

  teste() {
    let u = this.enc.decrypt(sessionStorage.getItem("cecon.user"));
    console.log(u);
  }

}
