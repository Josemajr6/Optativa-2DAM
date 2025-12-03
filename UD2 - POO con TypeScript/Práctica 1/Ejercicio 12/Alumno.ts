import { Calificacion } from "./Calificacion";
import { Modulo } from "./Modulo";
import { Persona } from "./Persona";

export class Alumno extends Persona {

    private _ciclo: string;
    private _calificaciones: Calificacion[];


	constructor(dni: string, nombre: string, apellidos: string, fechaNacimiento: Date, ciclo: string) {
		super(dni, nombre, apellidos, fechaNacimiento);
        this._ciclo = ciclo;
		this._calificaciones = [];
	}
    
	public get ciclo(): string {
		return this._ciclo;
	}

	public get calificaciones(): Calificacion[] {
		return this._calificaciones;
	}

	public set ciclo(value: string) {
		this._ciclo = value;
	}

	public set calificaciones(value: Calificacion[]) {
		this._calificaciones = value;
	}

    public matricular(modulo: Modulo): void {
        let existe: Boolean = this._calificaciones.some(c => c.modulo === modulo)
        if (!existe) {
            this._calificaciones.push(new Calificacion(modulo, 0))
        }
        else { console.log(`No se puede matricular ${modulo.nombre} a ${this.nombre} por que ya está matriculado`) };
    }

    public calificar(modulo: Modulo, nota: number): void {
        let existe: Boolean = this._calificaciones.some(c => c.modulo === modulo)
        if (!existe) {
            console.log(`${this.nombre} no está matriculado en ${modulo.nombre}`)
        }
    }

    public promociona(): Boolean {
        const totalHoras = this._calificaciones.reduce((total, c) => total + c.modulo.horas, 0)
        const totalHorasAprobados = this._calificaciones.filter(c => c.notaFinal >= 5).reduce((total, c) => total + c.modulo.horas, 0)
        return totalHoras / totalHorasAprobados > 0.5
    }

    public getNotaMedia(): number {
        return this._calificaciones.reduce((total, c) => total + c.notaFinal, 0) / this._calificaciones.length + 1
    }

    

    public toString(): string {
        return `DNI: ${super.dni}, Nombre: ${super.nombre}, Apellidos: ${super.apellidos}, Fecha de Nacimiento: ${super.fechaNacimiento}, Nota Media: ${Math.round(this.getNotaMedia() * 100) / 100}`
    }

}