import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  urlcita = 'http://localhost:4000/api/cita/';

  constructor(private http: HttpClient) { }
  //Lista las citas
  getCitas(): Observable<any>{
    return this.http.get(this.urlcita);
  }
  //Obtiene los doctores para la lista desplegable
  obtenerDoctoresPorEspecialidad(especialidad: string): Observable<any[]> {
    return this.http.get<any[]>('${this.urlcita}?especialidad=${especialidad}');
  }
}
