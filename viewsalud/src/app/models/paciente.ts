export class Paciente {
    _id: string;
    nombres: string;
    apellidos: string;
    fechaNacimiento: Date;
    edad: number;

    constructor(_id: string, nombres: string, apellidos: string, fechaNacimiento: Date, edad: number) {
        this._id = _id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        // se inicializa el tipo Date
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
    }
}