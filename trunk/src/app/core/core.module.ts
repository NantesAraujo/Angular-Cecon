import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/components/toast/toast';

import { NgxSpinnerModule } from 'ngx-spinner';

import { CeconMessagesComponent } from './components/messages/messages.component';
import { CeconMaskDirective } from './directives/cecon-mask.directive';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
    declarations: [
        CeconMaskDirective,
        CeconMessagesComponent,
        LoadingComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        NgxSpinnerModule,
        ToastModule,
        ReactiveFormsModule
    ],
    exports: [
        CeconMaskDirective,
        LoadingComponent,
        CeconMessagesComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [MessageService]
})
export class CoreModule { }