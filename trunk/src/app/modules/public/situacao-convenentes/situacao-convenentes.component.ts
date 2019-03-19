import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ToastMessageService } from 'src/app/core/services/toast-message.service';
import { EnumTipoToastMessage } from 'src/app/core/enums/tipo-toast-message.enum';
import { EnumPositionToastMessage } from 'src/app/core/enums/position-toast-message.enum';

declare var $: any;

const TIPOS_CONSULTA = {
  INSCRICAO: {
    id: "tipoConsultaInscricao", tipo: "INSCRICAO", label: "Inscrição"
  },
  RENOVACAO: {
    id: "tipoConsultaRenovacao", tipo: "RENOVACAO", label: "Renovação"
  },
  SITUACAO: {
    id: "tipoConsultaSituacao", tipo: "SITUACAO", label: "Situação"
  }
}

const TIPOS_CONVENENTE = {
  CPF: {
    id: "tipoConvenenteCPF", tipo: "CPF"
  },
  CNPJ: {
    id: "tipoConvenenteCNPJ", tipo: "CNPJ"
  }
}

@Component({
  selector: 'cecon-situacao-convenentes',
  templateUrl: './situacao-convenentes.component.html',
  styleUrls: ['./situacao-convenentes.component.scss']
})
export class SituacaoConvenentesComponent implements OnInit {

  tipoConsultaEscolhida: string = TIPOS_CONSULTA.INSCRICAO.tipo;

  tipoConvenenteEscolhido: string = TIPOS_CONVENENTE.CNPJ.tipo;

  buscaSituacaoConvenenteForm: FormGroup;

  naturezas = [];

  documentos = [];

  listaVigencia = [
    {
      dataEmissao: "09/10/2013",
      dataVencimento: "09/10/2014",
      dataFimRenovacao: "09/10/2014",
      numeroCCad: "1502"
    }
  ];

  submitted: boolean;

  exibirResultado: boolean;
  
  suggestionsCNPJ: string[];

  suggestionsCPF: string[];

  suggestionsRazaoSocial: string[];

  constructor(private http: HttpClient, private fb: FormBuilder, private toastMessageService: ToastMessageService) { }

  ngOnInit() {
    this.inicializarVariaveis();
  }

  inicializarVariaveis() {
    this.limpar();

    this.getNaturezas().subscribe((data: any) => {
      this.naturezas = data;
    });

    this.getDocumentos().subscribe((data: any) => {
      this.documentos = data;
    });
  }

  buscar() {
    this.submitted = true;

    if (this.isFormInvalido())
      return;

    this.exibirResultado = true;

    this.toastMessageService.showMessage(EnumTipoToastMessage.SUCCESS, EnumPositionToastMessage.TOP_RIGTH, "Operação realizada com sucesso", "A pesquisa retornou 0 registros.")
  }

  isFormInvalido(): boolean {
    switch (this.tipoConsultaEscolhida) {
      case TIPOS_CONSULTA.INSCRICAO.tipo:
        return (this.getForm.natureza.invalid)
      case TIPOS_CONSULTA.RENOVACAO.tipo:
        return (this.getForm.cnpj.invalid && this.getForm.razao_social.invalid && this.getForm.cpf.invalid)
      case TIPOS_CONSULTA.SITUACAO.tipo:
        return (this.getForm.cnpj.invalid && this.getForm.cpf.invalid)
      default:
        return false;
    }
  }

  criarBuscaSituacaoConvenenteForm() {
    this.buscaSituacaoConvenenteForm = this.fb.group({
      natureza: ['', Validators.required],
      cnpj: ['', Validators.required],
      cpf: ['', Validators.required],
      razao_social: ['', Validators.required]
    });

    this.setValueOnForm('natureza', null);
    this.setValueOnForm('cnpj', null);
  }

  limpar() {
    this.criarBuscaSituacaoConvenenteForm();

    this.submitted = this.exibirResultado = false;
  }

  searchSuggestionsByCNPJ(event) {
    this.suggestionsCNPJ = ["12.321.321/3213-21", "87.845.678/4847-87", "24.564.563/4563-45"];
  }

  searchSuggestionsByCPF(event) {
    this.suggestionsCPF = ["214.523.452-34", "547.564.785-74", "907.907.980-78"];
  }

  searchSuggestionsByRazaoSocial(event) {
    this.suggestionsRazaoSocial = ["Empresa 1", "Empresa 2", "Empresa 3"];
  }

  setValueOnForm(campo: string, valor: any): void {
    if (this.buscaSituacaoConvenenteForm.get(campo))
      this.buscaSituacaoConvenenteForm.get(campo).setValue(valor);
  }

  getNaturezas() {
    return this.http.get("assets/dados/naturezas.json");
  }

  getDocumentos() {
    return this.http.get("assets/dados/documentos.json");
  }

  get getForm() { return this.buscaSituacaoConvenenteForm.controls; }

  get tiposConsulta() { return TIPOS_CONSULTA }

  get tiposConvenente() { return TIPOS_CONVENENTE }
}