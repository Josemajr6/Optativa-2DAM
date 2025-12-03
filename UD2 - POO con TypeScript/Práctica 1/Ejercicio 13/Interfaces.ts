// Piloto
export interface PilotoF1 {
    _nombre: string;
    _escuderia: string;
    _pais: string;
}
export interface PilotoF1Puntuado extends PilotoF1 {
    _circuitos: string[];
    _puntos: number[];
    _puntuacionTotal: number;
    puntuar(circuito: string, puntos: number): void;
    obtenerPuntuacion(circuito: string): number;
}

export interface CarreraF1 {
    _circuito: string;
    _pais: string;
    _fecha: Date;
    _parrillaSalida: PilotoF1[];
    _clasificacion: PilotoF1[];
    obtenerPuntuacionPiloto(piloto: PilotoF1): number;
    lineaDeSalida(piloto: PilotoF1): number;
    primerosParrillaSalida(n: number): PilotoF1[];
    primerosClasificacion(n: number): PilotoF1[];
}

