import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/service/comentario.service';

@Component({
  selector: 'app-agregareditarcomentario',
  templateUrl: './agregareditarcomentario.component.html',
  styleUrls: ['./agregareditarcomentario.component.css']
})
export class AgregareditarcomentarioComponent implements OnInit {

  agregarComentario: FormGroup;

  constructor ( private fb: FormBuilder,
                private _comentarioService: ComentarioService,
                private router: Router) {

    this.agregarComentario = this.fb.group( {
      titulo:['', Validators.required],
      creador:['', Validators.required],
      texto:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregar() {
    // console.log(this.agregarComentario);
    const comentario: Comentario = {
      titulo : this.agregarComentario.get('titulo')?.value,
      creador : this.agregarComentario.get('creador')?.value,
      texto : this.agregarComentario.get('texto')?.value,
      fechacreacion : new Date
    }

    this._comentarioService.saveComentario(comentario).subscribe( data => {
      this.fb = data;
      this.router.navigate(['/']);
    });


  }


}
