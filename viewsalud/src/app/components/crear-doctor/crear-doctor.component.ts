import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-crear-doctor',
  templateUrl: './crear-doctor.component.html',
  styleUrls: ['./crear-doctor.component.css']
})
export class CrearDoctorComponent implements OnInit {
  doctorForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
  }
}
