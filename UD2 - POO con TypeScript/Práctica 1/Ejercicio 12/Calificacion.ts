import { Modulo } from "./Modulo";

export class Calificacion {
    private _modulo: Modulo;
    private _notaFinal: number;


	constructor(modulo: Modulo, notaFinal: number) {
		this._modulo = modulo;
		this._notaFinal = notaFinal;
	}
    


	public get modulo(): Modulo {
		return this._modulo;
	}


	public get notaFinal(): number {
		return this._notaFinal;
	}

	public set modulo(value: Modulo) {
		this._modulo = value;
	}


	public set notaFinal(value: number) {
		this._notaFinal = value;
	}

    

}