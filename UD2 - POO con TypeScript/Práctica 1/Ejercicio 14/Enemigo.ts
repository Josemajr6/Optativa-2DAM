export interface iEnemigo {
    nombre: string
    nivel: number
    puntosSalud: number
}

export class Enemigo implements iEnemigo {
    private _nombre: string;
    private _nivel: number;
    private _puntosSalud: number;


	constructor(nombre: string, nivel: number, puntosSalud: number) {
		this._nombre = nombre;
		this._nivel = nivel;
		this._puntosSalud = puntosSalud;
	}


	public get nombre(): string {
		return this._nombre;
	}

	public get nivel(): number {
		return this._nivel;
	}

	public get puntosSalud(): number {
		return this._puntosSalud;
	}

	public set nombre(value: string) {
		this._nombre = value;
	}

	public set nivel(value: number) {
		this._nivel = value;
	}

	public set puntosSalud(value: number) {
		this._puntosSalud = value;
	}


}