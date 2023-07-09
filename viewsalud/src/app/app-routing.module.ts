import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes 
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'listar-paciente', component: ListarPacienteComponent},
  { path: 'crear-paciente', component: CrearPacienteComponent},
  { path: 'editar-paciente/:id', component: CrearPacienteComponent},
  //Se encarga de redirigir las rutas erradas a la ruta raiz (al final de todas las otras rutas)
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
