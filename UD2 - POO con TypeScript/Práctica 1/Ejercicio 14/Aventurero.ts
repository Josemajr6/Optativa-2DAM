import { ObjetoMagico } from "./ObjetoMagico";
import { iPersonaje, Personaje } from "./Personaje";
import { TipoAventurero } from "./TipoAventurero";

export interface iAventurero extends iPersonaje {
    tipoAventurero: TipoAventurero
    objetosMagicos: ObjetoMagico[]
}

export class Aventurero extends Personaje implements iAventurero {
    private _tipoAventurero: TipoAventurero;
    private _objetosMagicos: ObjetoMagico[];


	constructor(nombre: string, nivel: number, tipoAventurero: TipoAventurero, objetosMagicos: ObjetoMagico[]) {
        super(nombre, nivel)
		this._tipoAventurero = tipoAventurero;
		this._objetosMagicos = objetosMagicos;
	}
    

	public get tipoAventurero(): TipoAventurero {
		return this._tipoAventurero;
	}

	public get objetosMagicos(): ObjetoMagico[] {
		return this._objetosMagicos;
	}

	public set tipoAventurero(value: TipoAventurero) {
		this._tipoAventurero = value;
	}

	public set objetosMagicos(value: ObjetoMagico[]) {
		this._objetosMagicos = value;
	}

}