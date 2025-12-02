export abstract class Persona {
    private _dni: string;
    private _nombre: string;
    private _apellidos: string;
    private _fechaNacimiento: Date;


	constructor(dni: string, nombre: string, apellidos: string, fechaNacimiento: Date) {
		this._dni = dni;
		this._nombre = nombre;
        this._apellidos = apellidos
		this._fechaNacimiento = fechaNacimiento;
	}
    

	public get dni(): string {
		return this._dni;
	}

	public get nombre(): string {
		return this._nombre;
	}

    public get apellidos(): string {
		return this._apellidos;
	}

	public get fechaNacimiento(): Date {
		return this._fechaNacimiento;
	}

	public set dni(value: string) {
		this._dni = value;
	}

	public set nombre(value: string) {
		this._nombre = value;
	}

    public set apellidos(value: string) {
		this._apellidos = value;
	}

	public set fechaNacimiento(value: Date) {
		this._fechaNacimiento = value;
	}

    public toString(): string {
        return `DNI: ${this._dni}, Nombre: ${this._nombre}, Apellidos: ${this._apellidos}, Fecha de Nacimiento: ${this._fechaNacimiento}`
    }


}