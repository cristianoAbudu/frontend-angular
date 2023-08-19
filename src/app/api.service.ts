import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    let apiUrl = 'http://3.140.90.70:8082';

    return this.http.get<any[]>(`${apiUrl}`);
  }

  addPost(nome: string | null | undefined, senha: string | null | undefined): Observable<any> {
    var body = {
        "nome": nome, 
        "senha": senha
    };

    console.log(body);

    let apiUrl = 'http://3.143.118.52:8084';

    return this.http.post<any>(
        `${apiUrl}`, 
        body
    );
  }

  associaChefePost(chefe: any, subordinado: any): Observable<any> {
    let apiUrl = 'http://3.134.44.106:8081';

    var body = {
        "idChefe": chefe, 
        "idSubordinado": subordinado
    };

    return this.http.post<any>(
        `${apiUrl}/associaChefe`, 
        body
    );
  }
}