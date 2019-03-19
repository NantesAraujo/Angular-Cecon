import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const header = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST',
    })
};

export const httpOptionsOAuth = {
    headers: new HttpHeaders({
        'Content-type' : 'application/x-www-form-urlencoded'
    })
}