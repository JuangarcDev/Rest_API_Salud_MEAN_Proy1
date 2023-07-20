import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cita } from 'src/app/models/cita';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { parseISO } from 'date-fns';
import { HttpClient } from '@angular/common/http';



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
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private http: HttpClient) {
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

    console.log(this.citaForm.get('ccPaciente')?.value);
    console.log(this.citaForm.get('especialidadCita')?.value);
    

    const CITA: Cita = {
      ccPaciente: this.citaForm.get('ccPaciente')?.value,
      especialidadCita: this.citaForm.get('especialidadCita')?.value,
      fechaCita: parseISO(this.citaForm.get('fechaCita')?.value),
      nombrePaciente: '1',
      nombreDoctor: '2',
    }
    console.log(CITA);
    this.toastr.success('La cita fue creada exitosamente..', 'Cita Creada');
    this.router.navigate(['/listar-cita']);
  }
}
