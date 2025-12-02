import { Alumno } from "./Alumno";
import { Modulo } from "./Modulo";

// Alumnos
const alumno1 = new Alumno("11111111H", "Alejandro","Fernández", new Date(2000,2, 15), "DAW");
const alumno2 = new Alumno("22222222M", "Daniel", "Travieso", new Date(1992, 6,5), "DAW");
// Modulos
const progr = new Modulo("Programacion", 8);
const bd = new Modulo("Bases de Datos", 7);
const sis = new Modulo("Sistemas", 4);
const endes = new Modulo("Entornos de Desarrollo", 3);
// Matricular
alumno1.matricular(progr);
alumno1.matricular(bd);
alumno1.matricular(sis);
alumno1.matricular(endes);
alumno2.matricular(progr);
alumno2.matricular(bd);
alumno2.matricular(sis);
alumno2.matricular(endes);
// Calificar
alumno1.calificar(progr, 8);
alumno1.calificar(bd, 6);
alumno1.calificar(sis, 6);
alumno1.calificar(endes, 10);
alumno2.calificar(progr, 4);
alumno2.calificar(bd, 4);
alumno2.calificar(sis, 6);
alumno2.calificar(endes, 10);
// Mostrar resultados
console.log(alumno1.toString() + ", promociona: " + (alumno1.promociona() ? "sí": "no"));
console.log(alumno2.toString() + ", promociona: " + (alumno2.promociona() ? "sí": "no"));