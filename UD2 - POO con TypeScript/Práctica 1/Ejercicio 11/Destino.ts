export interface iDestino {
    ciudad: string;
    distanciaKM: number;
}

export class Destino implements iDestino {
    private _ciudad: string;
    private _distanciaKM: number;


	constructor(ciudad: string, distanciaKM: number) {
		this._ciudad = ciudad;
		this._distanciaKM = distanciaKM;
	}

	public get ciudad(): string {
		return this._ciudad;
	}
    
	public get distanciaKM(): number {
		return this._distanciaKM;
	}

   
	public set ciudad(value: string) {
		this._ciudad = value;
	}


	public set distanciaKM(value: number) {
		this._distanciaKM = value;
	}


    
}