import { CarreraF1Impl } from "./CarreraF1";
import { PilotoF1PuntuadoImpl } from "./PilotoF1";

// Creación de pilotos
const piloto1 = new PilotoF1PuntuadoImpl("Lewis Hamilton", "Ferrari", "UK");
const piloto2 = new PilotoF1PuntuadoImpl("Max Verstappen", "Red Bull", "NL");
const piloto3 = new PilotoF1PuntuadoImpl("Charles Leclerc", "Ferrari", "MC");
const piloto4 = new PilotoF1PuntuadoImpl("George Russell", "Mercedes", "UK");
const piloto5 = new PilotoF1PuntuadoImpl("Juki Tsunoda ", "Red Bull", "JP");
const piloto6 = new PilotoF1PuntuadoImpl("Carlos Sainz", "Williams", "ES");
const piloto7 = new PilotoF1PuntuadoImpl("Lando Norris", "McLaren", "UK");
const piloto8 = new PilotoF1PuntuadoImpl("Fernando Alonso", "Aston Martin", "ES");
const piloto9 = new PilotoF1PuntuadoImpl("Esteban Ocon", "Haas", "FR");
const piloto10 = new PilotoF1PuntuadoImpl("Oliver Bearman", "Haas", "DK");

// Asignando puntuaciones por un circuito
piloto1.puntuar("Monaco", 25);
piloto2.puntuar("Monaco", 18);
piloto3.puntuar("Monaco", 15);
piloto4.puntuar("Monaco", 12);
piloto5.puntuar("Monaco", 10);
piloto6.puntuar("Monaco", 8);
piloto7.puntuar("Monaco", 6);
piloto8.puntuar("Monaco", 4);
piloto9.puntuar("Monaco", 2);
piloto10.puntuar("Monaco", 1);

// Clasificación final del circuito
const clasificacion = [piloto1, piloto2, piloto3, piloto4, piloto5,
    piloto6, piloto7, piloto8, piloto9, piloto10
];

// Parrilla de salida
const parrillaSalida = [
    piloto2, piloto1, piloto4, piloto3, piloto5, piloto6, piloto7,
    piloto8, piloto9, piloto10
];

const carrera = new CarreraF1Impl("Monaco", "MC", new Date(), clasificacion, parrillaSalida);

console.log("Puntos Hamilton:", carrera.obtenerPuntuacionPiloto(piloto1));
console.log("Línea de salida Verstappen:", carrera.lineaDeSalida(piloto2));
console.log("Primero de la parrilla:", carrera.primerosParrillaSalida(1).map(p => p._nombre));
console.log("Primeros 2 de la clasificación:", carrera.primerosClasificacion(2).map(p => p._nombre));
console.log("Puntuación total Leclerc:", piloto3.getPuntuacionTotal());