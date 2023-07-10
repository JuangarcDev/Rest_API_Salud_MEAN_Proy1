import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControlName  } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente';
import { differenceInYears, parseISO } from 'date-fns';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
export class CrearPacienteComponent implements OnInit {
  pacienteForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
    this.pacienteForm = this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['',[fechaNacimientoValidator, Validators.required]],
    })
  }


  agregarPaciente() {

    console.log(this.pacienteForm);
  
    const PACIENTE: Paciente = {
      _id: this.pacienteForm.get('cedula')?.value,
      nombres: this.pacienteForm.get('nombres')?.value,
      apellidos: this.pacienteForm.get('apellidos')?.value,
      fechaNacimiento: this.pacienteForm.get('fechaNacimiento')?.value,
      //Se calcula la edad mediante FechaNacimiento
      edad: differenceInYears(new Date(), parseISO(this.pacienteForm.get('fechaNacimiento')?.value)),
    }


    console.log(PACIENTE);
    this.toastr.success('El Paciente fue registrado con exito ;)', 'Paciente Registrado');
    this.router.navigate(['/listar-paciente']);
  }

  ngOnInit(): void {
    
  }
}
