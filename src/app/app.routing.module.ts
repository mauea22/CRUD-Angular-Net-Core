import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregareditarcomentarioComponent } from './components/agregareditarcomentario/agregareditarcomentario.component';
import { ListcomentariosComponent } from './components/listcomentarios/listcomentarios.component';
import { VercomentarioComponent } from './components/vercomentario/vercomentario.component';

const routes: Routes = [
  {path: '', component:ListcomentariosComponent},
  {path: 'agregar', component: AgregareditarcomentarioComponent},
  {path: 'editar/:id', component: AgregareditarcomentarioComponent},
  {path: 'ver/:id', component: VercomentarioComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
]


@NgModule({
  imports:[ RouterModule.forRoot( routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{ }
