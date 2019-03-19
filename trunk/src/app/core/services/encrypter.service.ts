import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncrypterService {

  constructor() { }

  encrypt(data) {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), environment.keyToCrypt).toString();
    } catch (e) {
      console.error(e);
    }
  }

  decrypt(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, environment.keyToCrypt);

      if (bytes.toString())
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      throw "Não foi possível obter dados da sessão!";
      // console.error("Não foi possível obter dados da sessão!");
    } catch (e) {
      console.error(e);
    }
  }
}
