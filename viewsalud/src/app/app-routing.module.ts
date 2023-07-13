import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes 
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ListarDoctorComponent } from './components/listar-doctor/listar-doctor.component';
import { CrearDoctorComponent } from './components/crear-doctor/crear-doctor.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';

const routes: Routes = [
  //Vista inicial de la pag
  { path: '', component: InicioComponent },
  //Rutas del paciente
  { path: 'listar-paciente', component: ListarPacienteComponent},
  { path: 'crear-paciente', component: CrearPacienteComponent},
  { path: 'editar-paciente/:id', component: CrearPacienteComponent},
  //Rutas del doctor
  { path: 'listar-doctor', component: ListarDoctorComponent},
  { path: 'crear-doctor', component: CrearDoctorComponent},
  { path: 'editar-doctor/:id', component: CrearDoctorComponent},
  //Rutas de citas
  { path: 'listar-cita', component: ListarCitaComponent},
  { path: 'crear-cita', component: CrearCitaComponent},
  { path: 'editar-cita/:id', component: CrearCitaComponent},
  //Se encarga de redirigir las rutas erradas a la ruta raiz (al final de todas las otras rutas)
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
