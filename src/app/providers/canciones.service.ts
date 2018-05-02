import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cancion } from '../model/cancion';

const END_POINT = 'http://localhost:8080/cancion/';

@Injectable()
export class CancionesService {

  constructor(private http: HttpClient) {
    console.log('CancionesService constructor');
   }



  getAll(): Observable<any>{
    let url = END_POINT;
    console.log(`CancionesService getAll ${url}`);    
    return this.http.get(url);
  } 

  delete(id: number): Observable<any>{
    let url = END_POINT + id;
    console.log(`CancionesService delete ${url}`);    
    return this.http.delete(url);
  } 


  crear(nombre: String): Observable<any>{
    let url = END_POINT;
    console.log(`CancionesService crear ${url} nombre: ${nombre}`);   
    let body = { "nombre" : nombre };    
    return this.http.post(url, body);
  } 

  modificar(cancion: Cancion): Observable<any>{
    let url = END_POINT + cancion.id;
    console.log(`CancionesService modificar ${url} cancion: %o`, cancion);   
    let body = cancion;
    return this.http.put(url, body);
  } 

}