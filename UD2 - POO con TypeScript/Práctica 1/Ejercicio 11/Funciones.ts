import { Destino } from "./Destino";
import { Empleado } from "./Empleado";
import { Pasajero } from "./Pasajero";
import { Vuelo } from "./Vuelo";

export function obtenerVueloMasBarato(vuelos: Vuelo[], destino: Destino): Vuelo | null {
    const vuelosADestino: Vuelo[] = vuelos.filter(v => v.destino === destino)
    if (vuelosADestino.length == 0) return null
    return vuelosADestino.sort((a, b) => a.precio - b.precio)[0]
}

export function vuelosMaletaFacturada(vuelos: Vuelo[]): Vuelo[] {
    return vuelos.filter(v => v.listaPasajeros.some(p => p.llevaMaleta))
}

export function totalPasajeros(vuelos: Vuelo[]): number {
    return vuelos.reduce((total, v) => total + v.listaPasajeros.length, 0)
}

export function destinosDisponibles (vuelos: Vuelo[]): string[] {
    const destinosUnicos: string[] = [];

    for (const vuelo of vuelos) {
        const ciudad = vuelo.destino.ciudad;
        if (!destinosUnicos.includes(ciudad)) {
            destinosUnicos.push(ciudad);
        }
    }
    
    return destinosUnicos;
}

export function empleadosPorVuelo (vuelos: Vuelo[], codigo: number): Empleado[] {
    const vuelo = vuelos.find(v => v.codigo == codigo)
    return vuelo ? vuelo.listaEmpleados : []
}

export function buscarVuelosPorEmpleado (vuelos: Vuelo[], dniEmpleado: String): Vuelo[] {
    return vuelos.filter(v => v.listaEmpleados.some(e => e.DNI == dniEmpleado))
}

export function pasajerosPorVuelo (vuelos: Vuelo[], codigo: number): Pasajero[] {
    const vuelo = vuelos.find(v => v.codigo == codigo)
    return vuelo ? vuelo.listaPasajeros : []
} 