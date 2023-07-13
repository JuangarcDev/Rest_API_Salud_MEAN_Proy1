import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  urlpaciente = 'http://localhost:4000/api/paciente/';

  constructor(private http: HttpClient) { }
//Obtiene los pacientes y los lista
  getPacientes(): Observable<any> {
    return this.http.get(this.urlpaciente);
  }
//elimina un paciente al darle sobre el icono de eliminar
  eliminarPaciente(id: string): Observable<any> {
    return this.http.delete(this.urlpaciente + id);
  }
//guarda a un nuevo paciente de los datos del formulario .Req ser unica la cc
  guardarPaciente(paciente: Paciente): Observable<any> {
    return this.http.post(this.urlpaciente, paciente);
  }
//Permite editar a un paciente existente
  editarPaciente(id: string): Observable<any> {
    return this.http.get(this.urlpaciente + id);
  }
  confirmaEditPaciente(id: string, paciente: Paciente): Observable<any> {
    return this.http.put(this.urlpaciente +id, paciente);
  }
}
