import { Persona } from "./Persona";

export class Pasajero extends Persona {
    private _llevaMaleta: boolean;


	constructor(llevaMaleta: boolean, nombre: string, DNI: string) {
        super(nombre, DNI)
		this._llevaMaleta = llevaMaleta;
	}


	public get llevaMaleta(): boolean {
		return this._llevaMaleta;
	}

	public set llevaMaleta(value: boolean) {
		this._llevaMaleta = value;
	}

}