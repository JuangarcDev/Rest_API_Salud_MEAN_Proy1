export class Cita {
    _id?: string;
    idPaciente: any;
    idDoctor: any;
    nombrePaciente: string;
    especialidadCita: string;
    nombreDoctor: string;
    fechaCita: Date;

    constructor(idPaciente: any, idDoctor: any, nombrePaciente: string, especialidadCita: string, nombreDoctor: string, fechaCita: Date) {
        this.idPaciente = idPaciente;
        this.idDoctor = idDoctor;
        this.nombrePaciente = nombrePaciente;
        this.especialidadCita = especialidadCita;
        this.nombreDoctor = nombreDoctor;
        this.fechaCita = fechaCita;
    }
}