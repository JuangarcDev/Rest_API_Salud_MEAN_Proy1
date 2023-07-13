import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-crear-doctor',
  templateUrl: './crear-doctor.component.html',
  styleUrls: ['./crear-doctor.component.css']
})
export class CrearDoctorComponent implements OnInit {
  doctorForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
    this.doctorForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      especialidad: ['', Validators.required],
      consultorio: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/), Validators.min(1)]],
      correo: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    
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
    console.log(DOCTOR);
    this.toastr.success('El Doctor fue registrado con exito ;)', 'Doctor Registrado');
    this.router.navigate(['/listar-doctor']);
  }
}
