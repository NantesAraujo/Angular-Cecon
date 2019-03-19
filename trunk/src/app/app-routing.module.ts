import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './modules/public/public.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role-guard';
import { NotFoundComponent } from './commons/components/errors/not-found/not-found.component';
import { SecureComponent } from './modules/secure/secure.component';

const routes: Routes = [
  { path: '', redirectTo: 'cecon', pathMatch: 'full' },
  { path: 'cecon', component: PublicComponent, canActivate: [AuthGuard] },
  {
    path: 'home', component: SecureComponent, canActivate: [RoleGuard], data: {
      expectedRole: 'admin'
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
