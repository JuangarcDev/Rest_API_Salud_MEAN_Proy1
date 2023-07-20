import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cita } from 'src/app/models/cita';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { parseISO } from 'date-fns';
import { HttpClient } from '@angular/common/http';
import { CitaService } from 'src/app/services/cita.service';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';



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
  doctores: any[] = []; // Variable para almacenar los nombres de los doctores

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private http: HttpClient,
              private _citaService: CitaService,
              private _doctorService: DoctorService) {
    this.citaForm = this.fb.group({
      idPaciente: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      especialidadCita: ['', Validators.required],
      fechaCita: ['',[fechaCitaValidator, Validators.required]],
      nombreDoctor: ['', Validators.required] // Campo para almacenar el _id del doctor seleccionado
    });
  }

  ngOnInit(): void {
    
  }

  // Método para cargar los doctores según la especialidad seleccionada
  cargarDoctoresPorEspecialidad() {
    const especialidadCita = this.citaForm.get('especialidadCita')?.value;
    this._doctorService.obtenerDoctoresPorEspecialidad(especialidadCita).subscribe(
      (data) => {
        this.doctores = data;
  
        // Asigna el _id del primer doctor de la lista al campo 'nombreDoctor' para tener un valor inicial válido
        this.citaForm.get('nombreDoctor')?.setValue(this.doctores[0]._id);
      },
      (error) => {
        console.log(error);
        // Maneja el error si ocurre alguno al obtener los doctores
      }
    );
  }


  agregarCita() {
    const cedula = this.citaForm.get('idPaciente')?.value;
    const especialidadCita = this.citaForm.get('especialidadCita')?.value;
    const fechaCita = parseISO(this.citaForm.get('fechaCita')?.value);
    const idDoctor = this.citaForm.get('nombreDoctor')?.value;


    console.log(this.citaForm);
    //console.log(this.idPaciente);

    

    const nuevaCita = {
      cedula,
      especialidad: especialidadCita,
      fechaCita,
    };

    console.log(nuevaCita);

    this._citaService.persistirCita(nuevaCita).subscribe(data =>{
      console.log(data);
      this.toastr.success('La cita fue creada exitosamente..', 'Cita Creada');
      this.router.navigate(['/listar-cita']);
    }, error => {
      console.log(error);
      this.toastr.error('La cita no pudo ser creada', 'cita NO fue creada')
      this.citaForm.reset();

    });
    

  }
}
