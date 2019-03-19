import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';

export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: PublicComponent }
]