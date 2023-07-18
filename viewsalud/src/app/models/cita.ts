export class Cita {
    _id?: number;
    ccPaciente: string;
    nombrePaciente: String;
    especialidadCita: string;
    nombreDoctor: string;
    fechaCita: Date;

    constructor(ccPaciente: string, nombrePaciente: string, especialidadCita: string, nombreDoctor: string, fechaCita: Date) {
        this.ccPaciente = ccPaciente;
        this.nombrePaciente = nombrePaciente;
        this.especialidadCita = especialidadCita;
        this.nombreDoctor = nombreDoctor;
        this.fechaCita = fechaCita;
    }
}