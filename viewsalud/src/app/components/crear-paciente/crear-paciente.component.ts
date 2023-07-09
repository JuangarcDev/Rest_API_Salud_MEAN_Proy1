import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormGroup, FormBuilder, Validators, AbstractControl  } from '@angular/forms';

function fechaNacimientoValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const fechaNacimiento = new Date(control.value);
  const today = new Date();

  if (fechaNacimiento > today) {
    return { 'fechaNacimientoInvalida': true };
  }

  return null;
}

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent {
  pacienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pacienteForm = this.fb.group({
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', [Validators.required, fechaNacimientoValidator]],
    })
  }

  agregarPaciente() {
    console.log(this.pacienteForm)
  }
}
