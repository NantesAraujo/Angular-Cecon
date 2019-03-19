/**
 * A diretiva [ceconMask] adiciona uma máscara a um input. 
 * Ela pode ser utilizada diretamente em uma tag de input, ou em uma tag qualquer que contenha - ou gere - 
 * um único input.
 * 
 * Exemplos de utilização: 
 *  1:   <input id="meu-input" type="text" ceconMask="cpf">
 *  2:   <input id="meu-input" type="text" ceconMask="000.000.000-00">
 *  3:   <p-autoComplete id="autocomplete-cnpj" ceconMask="cnpj"></p-autoComplete>
 */

import { Directive, ElementRef, Input } from '@angular/core';

declare var $: any;

const defaultMasks = {
  CNPJ: "00.000.000/0000-00",
  CPF: "000.000.000-00"
}

@Directive({
  selector: '[ceconMask]'
})
export class CeconMaskDirective {

  @Input() ceconMask: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    let that = this;

    $(document).ready(() => {
      that.verificarErrosNoUsoDaDiretiva(that);
      $(that.getQuery(that)).mask(that.getMask(that.ceconMask));
    })
  }

  getQuery(that) {
    let node = that.elementRef.nativeElement;
    return that.equals(node.nodeName, "INPUT") ? ('#' + node.id) : ('#' + node.id + ' input');
  }

  getMask(maskParam: string): boolean {
    maskParam = maskParam.toUpperCase();
    return defaultMasks[maskParam] ? defaultMasks[maskParam] : maskParam;
  }

  verificarErrosNoUsoDaDiretiva(that) {
    if (!that.elementRef.nativeElement.id)
      throw `A diretiva [ceconMask] necessita de um ID válido vinculado a tag para funcionar corretamente! Adicione um ID na tag [${that.elementRef.nativeElement.nodeName}].`;
  }

  equals(a: string, b: string): boolean {
    return a.toUpperCase() === b.toUpperCase();
  }
}
