export class Doctor {
    _id?: number;
    nombre: string;
    apellido: string;
    especialidad: string;
    consultorio: number;
    correo: string;

    constructor(_id: number, nombre: string, apellido: string, especialidad: string, consultorio: number, correo: string) {
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.consultorio = consultorio;
        this.correo = correo;
    }
}

