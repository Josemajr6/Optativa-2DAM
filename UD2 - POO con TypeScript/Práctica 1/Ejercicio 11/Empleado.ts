import { Persona } from "./Persona";
import { TipoPuesto } from "./TipoPuesto";

export class Empleado extends Persona {

    private _puesto: TipoPuesto;
	constructor(puesto: TipoPuesto, nombre: string, DNI: string) {
        super(nombre, DNI);
		this._puesto = puesto;
	}

	public get puesto(): TipoPuesto {
		return this._puesto;
	}

	public set puesto(value: TipoPuesto) {
		this._puesto = value;
	}

}