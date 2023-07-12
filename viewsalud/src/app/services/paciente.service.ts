import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  urlpaciente = 'http://localhost:4000/api/paciente/';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<any> {
    return this.http.get(this.urlpaciente);
  }

  eliminarPaciente(id: string): Observable<any> {
    return this.http.delete(this.urlpaciente + id);
  }
}
