import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';
import { EnumTipoToastMessage } from '../enums/tipo-toast-message.enum';
import { EnumPositionToastMessage } from '../enums/position-toast-message.enum';


@Injectable({
    providedIn: 'root'
})
export class ToastMessageService {

    constructor(private messageService: MessageService) { }

    showMessage(type: EnumTipoToastMessage, keyToast: EnumPositionToastMessage, title: string, message: string): void {
        this.messageService.add({ key: keyToast, severity: type, summary: title, detail: message });
    }
}