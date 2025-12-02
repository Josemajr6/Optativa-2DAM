export class Modulo {
    private _nombre: string;
    private _horas: number;


	constructor(nombre: string, horas: number) {
		this._nombre = nombre;
		this._horas = horas;
	}

	public get nombre(): string {
		return this._nombre;
	}

	public get horas(): number {
		return this._horas;
	}


	public set nombre(value: string) {
		this._nombre = value;
	}


	public set horas(value: number) {
		this._horas = value;
	}
	
    public toString(): string {
        return `Nombre: ${this._nombre}, Horas: ${this._horas}}`
    }
}