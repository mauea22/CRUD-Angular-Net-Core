import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from '../../service/comentario.service';

@Component({
  selector: 'app-listcomentarios',
  templateUrl: './listcomentarios.component.html',
  styleUrls: ['./listcomentarios.component.css']
})
export class ListcomentariosComponent implements OnInit {

  listComentarios: Comentario[] = [];

  constructor( private _comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios(){
    this._comentarioService.getListComentarios().subscribe( d => {

      this.listComentarios = d;
    });
  }

  eliminarComentario( id: any ){
    console.log(id);
    this._comentarioService.deleteComentario(id).subscribe( d => {
      this.getComentarios()
    })
  }


}
