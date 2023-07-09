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
        this.edad = this.calcularEdad();
    }

    //Se calcula la edad mediante FechaNacimiento
    private calcularEdad(): number {
        const today = new Date();
        const birthDate = new Date(this.fechaNacimiento);
    
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
    
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
    
        return age;
      }
}