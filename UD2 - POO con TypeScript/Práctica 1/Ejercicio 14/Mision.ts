import { Aventurero } from "./Aventurero"
import { Enemigo } from "./Enemigo"

export interface iMision {
    titulo: string
    dificultad: number
    recompensa: number
    listaAventureros: Aventurero[]
    listaEnemigos: Enemigo[]
}

export class Mision implements iMision {
    private _titulo: string;
    private _dificultad: number;
    private _recompensa: number;
    private _listaAventureros: Aventurero[];
    private _listaEnemigos: Enemigo[];


	constructor(titulo: string, dificultad: number, recompensa: number, listaAventureros: Aventurero[], listaEnemigos: Enemigo[]) {
		this._titulo = titulo;
		this._dificultad = dificultad;
		this._recompensa = recompensa;
		this._listaAventureros = listaAventureros;
		this._listaEnemigos = listaEnemigos;
	}


	public get titulo(): string {
		return this._titulo;
	}

	public get dificultad(): number {
		return this._dificultad;
	}

	public get recompensa(): number {
		return this._recompensa;
	}

	public get listaAventureros(): Aventurero[] {
		return this._listaAventureros;
	}

	public get listaEnemigos(): Enemigo[] {
		return this._listaEnemigos;
	}

	public set titulo(value: string) {
		this._titulo = value;
	}

	public set dificultad(value: number) {
		this._dificultad = value;
	}

	public set recompensa(value: number) {
		this._recompensa = value;
	}

	public set listaAventureros(value: Aventurero[]) {
		this._listaAventureros = value;
	}

	public set listaEnemigos(value: Enemigo[]) {
		this._listaEnemigos = value;
	}

}