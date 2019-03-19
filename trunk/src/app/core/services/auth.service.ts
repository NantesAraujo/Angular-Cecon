import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import { httpOptionsOAuth } from './../config/config-app';
import { TokenAuthorization } from '../models/token-authorization.model';


const api = 'https://localhost:3000'

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    tokenKeyClock: TokenAuthorization;

    constructor(private httpClient: HttpClient){}

    getToken(): TokenAuthorization {
        this.getTokenKeyCloak().then((token: TokenAuthorization) => {
    
          this.tokenKeyClock = token;  
          
          console.log(token);
          
          localStorage.setItem("access_token", this.tokenKeyClock.access_token)
          localStorage.setItem("refresh_token", this.tokenKeyClock.refresh_token)      
        });
    
        return this.tokenKeyClock;
      }
    
    getTokenKeyCloak(): Promise<TokenAuthorization> {
        console.log('buscando token dentro no authService...');
        let body = `grant_type=client_credentials&client_id=XXXXXX&client_secret=XXXXXXXXXXXX`;
        
        return this.httpClient.post<TokenAuthorization>(environment.keyClockUrl.urlHomolacao, body, httpOptionsOAuth).toPromise();
    }
}