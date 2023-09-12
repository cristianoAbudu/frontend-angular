import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    let apiUrl = 'http://localhost:8082';
    var token = 'eyJraWQiOiJmZDRmNzk5Ni04N2ExLTRjMTAtYmMwYS04NWVkNjFjMWQ3NzAiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiYXVkIjoiY2xpZW50IiwibmJmIjoxNjk0NTU1NTgzLCJzY29wZSI6WyJvcGVuaWQiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDAwIiwiZXhwIjoxNjk0NTU1ODgzLCJpYXQiOjE2OTQ1NTU1ODMsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Oy4ev0WYnxQdOlO-bCznycn01xRgEIc_8qDZV6mI4lI3m5cNeMkZwNXWmmaUsxQ_mJO0gYpQmssBsQ1q-z9KHUbnVBftPXoRIofHZPYIZVYzENQ61ah6Fv2tuwrARuvrBiR68iM_64yeqFHG5Qs234Kwz9b28SssMzqLotrNmtZQ0cDBYZLjAj3I6VKe0zL1j3B3tAEKknEPYWtd-Uj363EsCJ_RE81IdFljJqncXbc7NFgplz-idVpomfyabQgDGe9gxbmmgHVFaTrL6uN-13B0iOB-rUAhV4HiPNo49U7ZfCEDo2q_zmijXL75dXOdCOMquy8tsbDH6Fs7MBWqlw';
    const headers = { 'Authorization': 'Bearer ' + token }

    return this.http.get<any[]>(`${apiUrl}`, { headers } );
  }

  addPost(nome: string | null | undefined, senha: string | null | undefined): Observable<any> {
    var body = {
        "nome": nome, 
        "senha": senha
    };

    console.log(body);

    let apiUrl = 'http://localhost:8084';

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