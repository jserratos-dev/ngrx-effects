import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../../store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuario } from '../../../store/actions';
import { Usuario } from '../../../models/usuario.models';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent  implements OnInit {

  public usuario!: Usuario | null;
  constructor( private route: ActivatedRoute, private store: Store<AppState>) {}


  ngOnInit(): void {

    this.store.select('usuario').subscribe( ({ user, loading, error }) =>{
      this.usuario = user;
    })

    this.route.params.subscribe( ({ id })  => {
      this.store.dispatch( cargarUsuario({ id }));

    })

  }

}
