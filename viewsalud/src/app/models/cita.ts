export class Cita {
    _id?: string;
    idPaciente: any;
    idDoctor: any;
    especialidadCita: string;
    fechaCita: Date;

    constructor(idPaciente: any, idDoctor: any, especialidadCita: string, fechaCita: Date) {
        this.idPaciente = idPaciente;
        this.idDoctor = idDoctor;
        this.especialidadCita = especialidadCita;
        this.fechaCita = fechaCita;
    }
}