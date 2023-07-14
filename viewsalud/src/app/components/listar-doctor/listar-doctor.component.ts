import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listar-doctor',
  templateUrl: './listar-doctor.component.html',
  styleUrls: ['./listar-doctor.component.css']
})
export class ListarDoctorComponent implements OnInit {
  listDoctores: Doctor[] = [];

  constructor(private _doctorService: DoctorService,
              private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.obtenerDoctores();
  }
//Listar doctores
  obtenerDoctores() {
    this._doctorService.getDoctores().subscribe(data => {
      console.log(data);
      this.listDoctores = data;
    }, error => {
      console.log(error);
    })
  }
//Elimina un doctor previamente creado
  eliminarDoctor(id: any) {
    this._doctorService.eliminarDoctor(id).subscribe(data =>{
      this.toastr.error('El doctor fue eliminado exitosamente..','Doctor elimando');
      this.obtenerDoctores();
    }, error => {
      this.toastr.error('Fallo en la eliminación del doctor','Doctor no fue elimando');
    })
  }
}
