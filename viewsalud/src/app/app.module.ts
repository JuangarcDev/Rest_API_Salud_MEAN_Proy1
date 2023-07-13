import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrearDoctorComponent } from './components/crear-doctor/crear-doctor.component';
import { ListarDoctorComponent } from './components/listar-doctor/listar-doctor.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPacienteComponent,
    ListarPacienteComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    CrearDoctorComponent,
    ListarDoctorComponent,
    CrearCitaComponent,
    ListarCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
