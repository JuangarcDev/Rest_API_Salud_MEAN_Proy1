import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {
  listCitas: Cita[] = [];

  constructor(private _citaService: CitaService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }
//Lista
  obtenerCitas() {
    this._citaService.getCitas().subscribe(data =>{
      console.log(data);
      this.listCitas = data;
    }, error =>{
      console.log(error);
    })
  }
//Borra
  deleteCita(id: any){
    this._citaService.deleteCita(id).subscribe(data =>{
      this.toastr.error('La cita fue eliminada con exito', 'cita eliminada')
      this.obtenerCitas();
    }, error =>{
      this.toastr.error('La cita no pudo ser eliminada', 'cita NO eliminada')
      console.log(error);
    })
  }
}


