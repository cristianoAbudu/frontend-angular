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
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  }

  addPost(nome: string | null | undefined, senha: string | null | undefined): Observable<any> {
    console.log(nome);
    console.log(senha);

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

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  }
}