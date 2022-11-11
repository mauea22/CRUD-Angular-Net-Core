import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Comentario } from 'src/app/interfaces/comentario';

@Component({
  selector: 'app-agregareditarcomentario',
  templateUrl: './agregareditarcomentario.component.html',
  styleUrls: ['./agregareditarcomentario.component.css']
})
export class AgregareditarcomentarioComponent implements OnInit {

  agregarComentario: FormGroup;

  constructor( private fb: FormBuilder) {
    this.agregarComentario = this.fb.group( {
      titulo:['', Validators.required],
      creador:['', Validators.required],
      texto:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregar(){
    // console.log(this.agregarComentario);

    const comentario: Comentario = {
      titulo : this.agregarComentario.controls?.["titulo"].value,
      creador : this.agregarComentario.controls?.["creador"].value,
      texto : this.agregarComentario.controls?.["texto"].value,
      fechacreacion : new Date
    }

    console.log(comentario);
  }
}
