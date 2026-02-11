import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Usuario {
  id?: number;
  name: string;
  email: string;
  phone: string;
  curso?: string;
  fecha?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioServices {
  private http = inject(HttpClient);

  private API_URL = 'https://698c891821a248a27361e145.mockapi.io/usuarios'

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_URL)
  }

  //Metodo Post
  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API_URL, usuario);
  }


  //Metodo buscarPorId
  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}/${id}`);
  }

  putUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_URL}/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
