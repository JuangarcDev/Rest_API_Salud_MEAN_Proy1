import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../models/cita';

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

  //Eliminar
  deleteCita(id: string): Observable<any>{
    return this.http.delete(this.urlcita + id);
  }

  //Crear
  persistirCita(cita: any) : Observable<any>{
    return this.http.post(this.urlcita, cita);
  }
}


