import { NgModule } from '@angular/core';

import { SecureComponent } from './secure.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [
        SecureComponent
    ],
    imports: [
        CoreModule
    ],
    providers: []
})
export class SecureModule {
}