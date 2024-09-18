import { createReducer, on } from "@ngrx/store";
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from "../actions";
import { Usuario } from "../../models/usuario.models";

export interface UsuarioState {
    id      : string  | null,
    user    : Usuario | null,
    loader  : boolean,
    loading : boolean,
    error   : any
}

export const usuarioInitialState: UsuarioState = {
    id: null,
    user: null,
    loader: false,
    loading: false,
    error: null

}

export const usuarioReducer = createReducer(
    usuarioInitialState,
    on(cargarUsuario, (state, { id }) => ({ 
        ...state, 
        loading: true,
        id: id
    })),
    on(cargarUsuarioSuccess, (state, { usuario }) => ({ 
        ...state, 
        loading: false,
        loader: true,
        user: { ...usuario }
    })),

    on(cargarUsuarioError, (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loader: false,
        error:{
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

);
