import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/guards/auth.guard';
import { CoreModule } from './core/core.module';
import { LoadingInterceptorService } from './core/services/loading-interceptor.service';
import { PublicModule } from './modules/public/public.module';
import { SecureModule } from './modules/secure/secure.module';
import { RoleGuard } from './core/guards/role-guard';
import { CeconCommonsModule } from './commons/commons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CeconCommonsModule,
    CoreModule,
    PublicModule,
    SecureModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    RoleGuard,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
