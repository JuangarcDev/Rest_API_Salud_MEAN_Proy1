import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  urldoctor = 'http://localhost:4000/api/doctor/';

  constructor(private http: HttpClient) { }
//para listar
  getDoctores(): Observable<any> {
    return this.http.get(this.urldoctor);
  }
//para eliminar
  eliminarDoctor(id: string): Observable<any> {
    return this.http.delete(this.urldoctor + id);
  }
//para persistir
  guardarDoctor(doctor: Doctor): Observable<any> {
    return this.http.post(this.urldoctor, doctor);
  }
//para obtener el doctor a editar
obtenerDoctor(id: string): Observable<any> {
  return this.http.get(this.urldoctor + id);
}
//edita el doctor que se obtuvo anteriormente
editarDoctor(id: string, doctor: Doctor): Observable<any> {
  return this.http.put(this.urldoctor + id, doctor);
}
}
