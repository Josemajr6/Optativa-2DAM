import { Destino } from "./Destino"
import { Empleado } from "./Empleado"
import { Pasajero } from "./Pasajero"

export interface iVuelo {
    codigo: number
    destino: Destino
    precio: number
    listaPasajeros: Pasajero[]
    listaEmpleados: Empleado[]
}

export class Vuelo implements iVuelo {
    private _codigo: number;
    private _destino: Destino;
    private _precio: number;
    private _listaPasajeros: Pasajero[];
    private _listaEmpleados: Empleado[];


	constructor(codigo: number, destino: Destino, precio: number, listaPasajeros: Pasajero[], listaEmpleados: Empleado[]) {
		this._codigo = codigo;
		this._destino = destino;
		this._precio = precio;
		this._listaPasajeros = listaPasajeros;
		this._listaEmpleados = listaEmpleados;
	}
    
	public get codigo(): number {
		return this._codigo;
	}

	public get destino(): Destino {
		return this._destino;
	}

	public get precio(): number {
		return this._precio;
	}

	public get listaPasajeros(): Pasajero[] {
		return this._listaPasajeros;
	}

	public get listaEmpleados(): Empleado[] {
		return this._listaEmpleados;
	}

	public set codigo(value: number) {
		this._codigo = value;
	}

	public set destino(value: Destino) {
		this._destino = value;
	}

	public set precio(value: number) {
		this._precio = value;
	}


	public set listaPasajeros(value: Pasajero[]) {
		this._listaPasajeros = value;
	}

	public set listaEmpleados(value: Empleado[]) {
		this._listaEmpleados = value;
	}

}