import { NgModule} from '@angular/core';

import { TableModule } from 'primeng/table';

import { HeaderPublicComponent } from './components/header/header-public.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

@NgModule({
    declarations: [
        HeaderPublicComponent,
        NotFoundComponent
    ],
    imports: [
        TableModule
    ],
    exports: [
        HeaderPublicComponent,
        NotFoundComponent,
        TableModule
    ],
    providers: []
})
export class CeconCommonsModule { }