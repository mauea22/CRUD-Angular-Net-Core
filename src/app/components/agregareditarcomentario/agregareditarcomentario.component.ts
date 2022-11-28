import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/service/comentario.service';

@Component({
  selector: 'app-agregareditarcomentario',
  templateUrl: './agregareditarcomentario.component.html',
  styleUrls: ['./agregareditarcomentario.component.css']
})
export class AgregareditarcomentarioComponent implements OnInit {

  agregarComentario: FormGroup;
  action = 'Agregar';
  id = 0;
  comentario: Comentario | any;


  constructor ( private fb: FormBuilder,
                private _comentarioService: ComentarioService,
                private router: Router,
                private aRoute: ActivatedRoute) {

    this.agregarComentario = this.fb.group( {
      titulo:['', Validators.required],
      creador:['', Validators.required],
      texto:['', Validators.required]
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {

    this.esEditar();
  }

  esEditar(){
    if (this.id !== 0) {
      this.action = 'Editar';

      this._comentarioService.getComentarios(this.id).subscribe( data => {
        console.log(data);
        this.comentario = data;
        this.agregarComentario.patchValue({
          titulo: this.comentario.titulo,
          texto: this.comentario.texto,
          creador: this.comentario.creador,
        })
      })
    }
  }

  agregarEditarComentario() {

    if (this.comentario == undefined) {
      // console.log(this.agregarComentario);
      const comentario: Comentario = {
        titulo : this.agregarComentario.get('titulo')?.value,
        creador : this.agregarComentario.get('creador')?.value,
        texto : this.agregarComentario.get('texto')?.value,
        fechacreacion : new Date
      }

      this._comentarioService.saveComentario(comentario).subscribe(data => {
        this.router.navigate(['/']);
      });

    } else{

      //editamos comentario
      const comentario: Comentario = {
        titulo : this.agregarComentario.get('titulo')?.value,
        creador : this.agregarComentario.get('creador')?.value,
        texto : this.agregarComentario.get('texto')?.value,
        fechacreacion : this.comentario.fechacreacion
      }

    }

  }


}

