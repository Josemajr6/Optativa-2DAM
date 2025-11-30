import { Destino } from "./Destino";
import { Empleado } from "./Empleado";
import { buscarVuelosPorEmpleado, destinosDisponibles, empleadosPorVuelo, obtenerVueloMasBarato, pasajerosPorVuelo, totalPasajeros, vuelosMaletaFacturada } from "./Funciones";
import { Pasajero } from "./Pasajero";
import { TipoPuesto } from "./TipoPuesto";
import { Vuelo } from "./Vuelo";

 
const Paris = new Destino("Paris", 100)
const Londres = new Destino("Londrés", 1500)
const piloto1 = new Empleado(TipoPuesto.Piloto, "Juan Pérez", "52075116B");
const azafata1 = new Empleado(TipoPuesto.Auxiliar, "Ana Goméz", "5032323D")

const pasajero1 = new Pasajero(true, "Luis", "333333D");
const pasajero2 = new Pasajero(false, "Marta", "43403403D");

const listaVuelos: Vuelo[] = [
    new Vuelo(1, Paris, 150, [pasajero1, pasajero2], [piloto1, azafata1]),
    new Vuelo(2, Paris, 90, [pasajero2], [piloto1]),
    new Vuelo(3, Londres, 200, [pasajero1], [azafata1])
]

console.log(`Vuelo más barato a París ${obtenerVueloMasBarato(listaVuelos, Paris)}}`)
console.log(`Vuelos con maletas facturadas: ${vuelosMaletaFacturada(listaVuelos)}`)
console.log(`Total de pasajeros: ${totalPasajeros(listaVuelos)}`)
console.log(`Destinos disponibles: ${destinosDisponibles(listaVuelos)}`)
console.log(`Empleados del vuelo 1: ${empleadosPorVuelo(listaVuelos, 1)}`)
console.log(`Vuelos del Empleado Juan Pérez: ${buscarVuelosPorEmpleado(listaVuelos, "52075116B")}`)
console.log(`Pasajeros del vuelo 3: ${pasajerosPorVuelo(listaVuelos, 3)}`)
