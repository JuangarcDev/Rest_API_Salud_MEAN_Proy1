import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita';


@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {
  listCitas: Cita[] = [];

  constructor(private _citaService: CitaService) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas() {
    this._citaService.getCitas().subscribe(data =>{
      console.log(data);
      this.listCitas = data;
    }, error =>{
      console.log(error);
    })
  }
}
