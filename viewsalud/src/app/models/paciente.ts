export class Paciente {
    _id: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    edad: number;

    constructor(_id: string, nombre: string, apellido: string, fechaNacimiento: Date, edad: number) {
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        // se inicializa el tipo Date
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
    }
}