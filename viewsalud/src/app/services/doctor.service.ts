import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  urldoctor = 'http://localhost:4000/api/doctor/';

  constructor(private http: HttpClient) { }

  getDoctores(): Observable<any> {
    return this.http.get(this.urldoctor);
  }

  eliminarDoctor(id: string): Observable<any> {
    return this.http.delete(this.urldoctor + id);
  }
}
