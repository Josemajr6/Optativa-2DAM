export interface iPersona {
    nombre: string;
    DNI: string;
}

export abstract class Persona implements iPersona {
    private _nombre: string;
    private _DNI: string;
	

	constructor(nombre: string, DNI: string) {
		this._nombre = nombre;
		this._DNI = DNI;
	}

	public get nombre(): string {
		return this._nombre;
	}


	public get DNI(): string {
		return this._DNI;
	}
	public set nombre(value: string) {
		this._nombre = value;
	}
    
	public set DNI(value: string) {
		this._DNI = value;
	}


}