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

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {}

  salvar(){
    console.log(this.cadastroForm.value.nome);
    console.log(this.cadastroForm.value.senha);

    {
      
    }

    this.apiService.addPost(
      this.cadastroForm.value.nome, 
      this.cadastroForm.value.senha
    ).subscribe((data: any[]) => {
      console.log(data);
    });
    
    ;
  }

}
