import { TipoObjetoMagico } from "./TipoObjetoMagico"

export interface iObjetoMagico {
    nombre: string
    tipoObjetoMagico: TipoObjetoMagico
}

export class ObjetoMagico implements iObjetoMagico {
    private _nombre: string;
    private _tipoObjetoMagico: TipoObjetoMagico;


	constructor(nombre: string, tipoObjetoMagico: TipoObjetoMagico) {
		this._nombre = nombre;
		this._tipoObjetoMagico = tipoObjetoMagico;
	}
    

	public get nombre(): string {
		return this._nombre;
	}

	public get tipoObjetoMagico(): TipoObjetoMagico {
		return this._tipoObjetoMagico;
	}

	public set nombre(value: string) {
		this._nombre = value;
	}

	public set tipoObjetoMagico(value: TipoObjetoMagico) {
		this._tipoObjetoMagico = value;
	}

}