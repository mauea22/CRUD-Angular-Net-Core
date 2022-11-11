import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario';

@Component({
  selector: 'app-listcomentarios',
  templateUrl: './listcomentarios.component.html',
  styleUrls: ['./listcomentarios.component.css']
})
export class ListcomentariosComponent implements OnInit {

  listComentarios: Comentario[] = [
    {titulo: 'Angular', creador: 'Mauro', fechacreacion: new Date(), texto:'data'},
    {titulo: 'React', creador: 'Miguel', fechacreacion: new Date(), texto:'data'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
