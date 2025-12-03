export interface iPersonaje {
    nombre: string
    nivel: number
}

export abstract class Personaje implements iPersonaje {

    private _nombre: string;
    private _nivel: number;


	constructor(nombre: string, nivel: number) {
		this._nombre = nombre;
		this._nivel = nivel;
	}

	public get nombre(): string {
		return this._nombre;
	}

	public get nivel(): number {
		return this._nivel;
	}

	public set nombre(value: string) {
		this._nombre = value;
	}

	public set nivel(value: number) {
		this._nivel = value;
	}
    

}