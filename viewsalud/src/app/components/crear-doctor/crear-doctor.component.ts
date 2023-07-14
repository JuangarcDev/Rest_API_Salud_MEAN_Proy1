import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/services/doctor.service';



@Component({
  selector: 'app-crear-doctor',
  templateUrl: './crear-doctor.component.html',
  styleUrls: ['./crear-doctor.component.css']
})
export class CrearDoctorComponent implements OnInit {
  doctorForm: FormGroup;
  titulo = 'Agregar Doctor';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _doctorService: DoctorService,
              private aRouter: ActivatedRoute) {
    this.doctorForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      especialidad: ['', Validators.required],
      consultorio: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/), Validators.min(1)]],
      correo: ['', [Validators.required, Validators.email]]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditarDoctor();
  }

  agregarDoctor(){
    console.log(this.doctorForm)
  
    const DOCTOR: Doctor = {
      nombre: this.doctorForm.get('nombre')?.value,
      apellido: this.doctorForm.get('apellido')?.value,
      especialidad: this.doctorForm.get('especialidad')?.value,
      consultorio: this.doctorForm.get('consultorio')?.value,
      correo: this.doctorForm.get('correo')?.value,
    }

    if(this.id !== null) {
      // se edita el doctor existente
      this._doctorService.editarDoctor(this.id, DOCTOR).subscribe(data =>{
      this.toastr.info('El Doctor fue editado con exito ;)', 'Doctor Actualizado');
      this.router.navigate(['/listar-doctor']);
      }, error =>{
        console.log(error);
        this.toastr.error('El Doctor no pudo ser editado :(', 'Doctor no Actualizado');
        this.doctorForm.reset();
      })

    } else{
      // se agrega un nuevo doctor
      console.log(DOCTOR);
      this._doctorService.guardarDoctor(DOCTOR).subscribe(data =>{
      this.toastr.success('El Doctor fue registrado con exito ;)', 'Doctor Registrado');
      this.router.navigate(['/listar-doctor']);
    }, error =>{
      console.log(error);
      this.toastr.error('El Doctor no pudo ser registrado :(', 'Doctor no Registrado');
      this.doctorForm.reset();
    })
    }

    

  }

  esEditarDoctor() {
    if(this.id !== null){
      this.titulo = 'Editar Doctor';
      this._doctorService.obtenerDoctor(this.id).subscribe(data =>{
        this.doctorForm.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          especialidad: data.especialidad,
          consultorio: data.consultorio,
          correo: data.correo,
        })
      })
    }
  }
}
