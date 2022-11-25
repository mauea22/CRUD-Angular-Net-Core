import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/service/comentario.service';

@Component({
  selector: 'app-vercomentario',
  templateUrl: './vercomentario.component.html',
  styleUrls: ['./vercomentario.component.css']
})
export class VercomentarioComponent implements OnInit {

  id: number;
  comentario: any;

  constructor(  private aRoute: ActivatedRoute,
                private _comentarioService: ComentarioService,) {
      this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getComentario();
  }

  getComentario(){
    this._comentarioService.getComentarios(this.id).subscribe( data => {
      this.comentario = data;
    })
  }

}
