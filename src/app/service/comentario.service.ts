import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private myAppUrl = 'https://localhost:44335/';
  private myApiUrl = 'api/Comentario/';

  constructor( private http: HttpClient ) { }

  getListComentarios(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteComentario( id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }


}
