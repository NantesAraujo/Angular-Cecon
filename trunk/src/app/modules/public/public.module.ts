import { NgModule } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete';

import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';
import { SituacaoConvenentesComponent } from './situacao-convenentes/situacao-convenentes.component';
import { CoreModule } from 'src/app/core/core.module';
import { CeconCommonsModule } from 'src/app/commons/commons.module';

@NgModule({
    declarations: [
        LoginComponent,
        PublicComponent,
        SituacaoConvenentesComponent
    ],
    imports: [
        CoreModule,
        CeconCommonsModule,
        AutoCompleteModule
    ],
    providers: []
})
export class PublicModule { }