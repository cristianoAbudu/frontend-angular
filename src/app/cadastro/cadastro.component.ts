import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  cadastroForm = this.formBuilder.group({
      nome: '',
      senha: ''
  });

  colaboradorList : any[] = [];

  associaChefeForm = this.formBuilder.group({
    chefe: '',
    subordinado: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.carregaColaboradorList();
  }
  
  carregaColaboradorList(){
    this.apiService.getPosts().subscribe((data: any[]) => {
      this.colaboradorList = data;
    });
  }

  salvar(){
    this.apiService.addPost(
      this.cadastroForm.value.nome, 
      this.cadastroForm.value.senha
    ).subscribe((data: any[]) => {
      this.carregaColaboradorList();
      this.cadastroForm.get('nome')?.setValue('');
      this.cadastroForm.get('senha')?.setValue('');
    });  
  }

  associaChefe() {
    this.apiService.associaChefePost(
      this.associaChefeForm.value.chefe, 
      this.associaChefeForm.value.subordinado
    ).subscribe((data: any[]) => {
      this.carregaColaboradorList();
      this.associaChefeForm.get('chefe')?.setValue('');
      this.associaChefeForm.get('subordinado')?.setValue('');
    });  
  }


}
