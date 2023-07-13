import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControlName  } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente';
import { differenceInYears, parseISO } from 'date-fns';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/services/paciente.service';

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
  titulo = 'Crear Paciente';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _pacienteService: PacienteService,
              private aRouter: ActivatedRoute) {
    this.pacienteForm = this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['',[fechaNacimientoValidator, Validators.required]],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editPaciente();
  }

  agregarPaciente() {

    console.log(this.pacienteForm);
  
    const PACIENTE: Paciente = {
      cedula: this.pacienteForm.get('cedula')?.value,
      nombre: this.pacienteForm.get('nombre')?.value,
      apellido: this.pacienteForm.get('apellido')?.value,
      fechaNacimiento: parseISO(this.pacienteForm.get('fechaNacimiento')?.value),
      //Se calcula la edad mediante FechaNacimiento
      edad: differenceInYears(new Date(), parseISO(this.pacienteForm.get('fechaNacimiento')?.value)),
    }

    if(this.id !== null) {
      // Se esta editando un paciente existente
      this._pacienteService.confirmaEditPaciente(this.id, PACIENTE).subscribe(data =>{
        this.toastr.info('El Paciente fue actualizado con exito ;)', 'Paciente Actualizado');
        this.router.navigate(['/listar-paciente']);
      }, error => {
        console.log(error);
        this.pacienteForm.reset();
      })
    } 
    else {
      // Se esta agregando un nuevo paciente
      console.log(PACIENTE);
      this._pacienteService.guardarPaciente(PACIENTE).subscribe(data => {
        this.toastr.success('El Paciente fue registrado con exito ;)', 'Paciente Registrado');
        this.router.navigate(['/listar-paciente']);
      }, error => {
        console.log(error);
        this.pacienteForm.reset();
      })
    }
  }

  editPaciente() {
    if(this.id !== null){
      this.titulo = 'Editar Paciente';
      this._pacienteService.editarPaciente(this.id).subscribe(data =>{
        this.pacienteForm.setValue({
          cedula: data.cedula,
          nombre: data.nombre,
          apellido: data.apellido,
          fechaNacimiento: data.fechaNacimiento,
        })
      })
    }
  }
}
