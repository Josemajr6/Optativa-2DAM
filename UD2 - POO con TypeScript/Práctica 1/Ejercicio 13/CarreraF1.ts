import { CarreraF1, PilotoF1 } from "./Interfaces";

export class CarreraF1Impl implements CarreraF1 {
    _circuito: string;
    _pais: string;
    _fecha: Date;
    _parrillaSalida: PilotoF1[];
    _clasificacion: PilotoF1[];

    private readonly puntuaciones: number[] = [25, 18, 15, 12, 10, 8 , 6, 4 , 2, 1]

    constructor(circuito: string, pais: string, fecha: Date, clasificacion: PilotoF1[], parrilaSalida: PilotoF1[]) {
        this._circuito = circuito
        this._pais = pais
        this._fecha = fecha
        this._clasificacion = clasificacion
        this._parrillaSalida = parrilaSalida
    }

    public obtenerPuntuacionPiloto(piloto: PilotoF1): number {
        const pos = this._clasificacion.indexOf(piloto)
        if (pos === -1) {
            throw new Error(`El piloto ${piloto._nombre} no aparece en la clasificación`);
        }
        if (pos < this.puntuaciones.length) {
            return this.puntuaciones[pos]
        }
        return 0
    }

    public lineaDeSalida(piloto: PilotoF1): number {
        const posicionParrilla = this._parrillaSalida.indexOf(piloto)

        if (posicionParrilla === -1) {
            throw new Error(`El piloto ${piloto._nombre} no está en la parrilla de salida`);
        }
        return Math.floor(posicionParrilla / 2) + 1;
    }

    public primerosParrillaSalida(n: number): PilotoF1[] {
        return this._parrillaSalida.slice(0, n) // .slice => Recortar Array del 0 al número introducido
    }

    public primerosClasificacion(n: number): PilotoF1[] {
        return this._clasificacion.slice(0, n)
    }
}