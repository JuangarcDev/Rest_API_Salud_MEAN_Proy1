import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';


@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {
  listPacientes: Paciente[] = [];

  constructor(private _pacienteService: PacienteService) {

  }

  ngOnInit(): void {
    this.obtenerPaciente();
  }

  obtenerPaciente() {
    this._pacienteService.getPacientes().subscribe(data => {
      console.log(data);
      this.listPacientes = data;

    }, error =>{
      console.log(error);
    })
  }
}
