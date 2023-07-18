import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


function fechaCitaValidator (control: AbstractControl): { [key: string]: boolean } | null {
  const fechaCita = new Date(control.value);
  const today = new Date();

  if (fechaCita <= today) {
    return { 'fechaCitaInvalida': true };
  }

  return null;
}

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})

export class CrearCitaComponent implements OnInit {
  citaForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.citaForm = this.fb.group({
      ccPaciente: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      especialidadCita: ['', Validators.required],
      fechaCita: ['',[fechaCitaValidator, Validators.required]]
    })
  }

  ngOnInit(): void {
    
  }

  agregarCita() {
    console.log(this.citaForm);
  }
}
