import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregareditarcomentarioComponent } from './components/agregareditarcomentario/agregareditarcomentario.component';
import { ListcomentariosComponent } from './components/listcomentarios/listcomentarios.component';
import { VercomentarioComponent } from './components/vercomentario/vercomentario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregareditarcomentarioComponent,
    ListcomentariosComponent,
    VercomentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
