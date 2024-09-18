import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';

import { Usuario } from '../../../models/usuario.models';
import { cargarUsuarios } from '../../../store/actions';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  public usuarios: Usuario[] = [];
  public loading: boolean = false;
  public error: any
  constructor(private  store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      console.log(users)
      this.usuarios = users;
      this.loading = loading;
      this.error   = error;
    })
    this.store.dispatch( cargarUsuarios() )

    // this.usuarioService.getUser().
    // pipe(
    //   map( (resp: any) => resp.data )
    // ).
    // subscribe({
    //   next: ( users ) => {
    //     this.usuarios = users;
    //     console.log( users )
    //   },
    //   error: ( error ) => {
    //     console.log(error)
    //   }
    // })

  }

}
