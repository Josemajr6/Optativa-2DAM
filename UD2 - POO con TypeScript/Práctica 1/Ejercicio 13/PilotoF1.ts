import { PilotoF1Puntuado } from "./Interfaces";

export class PilotoF1PuntuadoImpl implements PilotoF1Puntuado {
     _nombre: string;
     _escuderia: string;
     _pais: string;
     _circuitos: string[];
     _puntos: number[];
     _puntuacionTotal: number;


	constructor(nombre: string, escuderia: string, pais: string) {
		this._nombre = nombre;
		this._escuderia = escuderia;
		this._pais = pais;
		this._circuitos = [];
		this._puntos = [];
		this._puntuacionTotal = 0;
    }

    public getPuntuacionTotal(): number {
        return this._puntos.reduce((total, p) => total + p, 0)
    }

    public puntuar(circuito: string, puntos: number): void {
        if (puntos < 0 || puntos > 25) {
            throw new Error(`Puntuación inválida ${puntos}. Debe ser un valor entre 1 y 25`)
        }
        this._circuitos.push(circuito)
        this._puntos.push(puntos)
        this._puntuacionTotal = this._puntuacionTotal + puntos
    }

    public obtenerPuntuacion(circuito: string): number {
        const index = this._circuitos.indexOf(circuito)
        return index !== -1 ? this._puntos[index] : 0
    }
}