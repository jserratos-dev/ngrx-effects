import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in';
  constructor(private http: HttpClient ) { }

  getUser(): Observable<Usuario[]> {
    return this.http.get(`${ this.url }/api/users?delay=3`)
    .pipe(
      map( (resp: any) => resp.data )
    )
  }

  getUserById( id: string ): Observable<Usuario> {
    return this.http.get(`${ this.url }/api/users/${ id }`)
    .pipe(
      map( (resp: any) => resp.data )
    )
  }
}
