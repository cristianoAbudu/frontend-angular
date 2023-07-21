import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  addPost(nome: string | null | undefined, senha: string | null | undefined): Observable<any> {
    var body = {
        "nome": nome, 
        "senha": senha
    };

    console.log(body);

    return this.http.post<any>(
        `${this.apiUrl}`, 
        body
    );
  }

  associaChefePost(chefe: any, subordinado: any): Observable<any> {
    var body = {
        "idChefe": chefe, 
        "idSubordinado": subordinado
    };

    return this.http.post<any>(
        `${this.apiUrl}/associaChefe`, 
        body
    );
  }
}