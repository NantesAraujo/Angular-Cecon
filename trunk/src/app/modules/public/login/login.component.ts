import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MessageService } from 'primeng/api';
import { Login } from 'src/app/core/models/login.model';
import { ToastMessageService } from 'src/app/core/services/toast-message.service';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'cecon-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  submitted = false;

  dominios = [];

  constructor(private loginService: LoginService, private fb: FormBuilder,
    private toastMessageService: ToastMessageService, private http: HttpClient) { }

  ngOnInit() {
    this.criarLoginForm();
    this.inicializarVariaveis();
  }

  inicializarVariaveis() {
    this.loginForm.get('dominio').setValue(null);
    this.getDominios().subscribe((data: any) => {
      this.dominios = data;
    });
  }

  criarLoginForm() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
      dominio: ['', Validators.required]
    });
  }

  login() {
    this.submitted = true;

    // VERIFICAR SE O LOGIN ESTÁ CORRETO
    // this.toastMessageService.showMessage(TipoToastMessage.ERROR, PositionToastMessage.TOP_RIGTH, 'Erro!', 'Login, Senha ou Domínio incorreto(s)!');

    if (this.isFormInvalido())
      return;

    let usuarioLogin = new Login(
      this.loginForm.get('login').value,
      this.loginForm.get('senha').value,
      this.loginForm.get('dominio').value
    );

    this.loginService.login(usuarioLogin);
  }

  isFormInvalido() {
    return this.isInputInvalido(this.getForm.login) ||
      this.isInputInvalido(this.getForm.senha) ||
      this.isInputInvalido(this.getForm.dominio);
  }

  isInputInvalido(input): boolean {
    switch (input) {
      case this.getForm.login:
        return this.getForm.login.invalid;
      case this.getForm.senha:
        return environment.production ? this.getForm.senha.invalid : false;
      case this.getForm.dominio:
        return this.getForm.dominio.invalid;
    }
  }

  getDominios() {
    return this.http.get("assets/dados/dominios.json");
  }

  get getForm() { return this.loginForm.controls; }

  get isProduction() { return environment.production }
}