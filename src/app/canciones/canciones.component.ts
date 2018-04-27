import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../providers/canciones.service';
import { Cancion } from '../model/cancion';


@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  //canciones
  canciones: Cancion[];
  cancionSeleccionada: Cancion;

  constructor(private cancionesService:CancionesService) {
    console.log("Canciones component")
    //Inicializar atributos
    this.canciones = [];
    this.cancionSeleccionada = new Cancion(-1,"");   
   // this.mockData(); 

  }

  ngOnInit() {
    console.log('CancionesComponent ngOnInit');
    //llamadas a los servicios
    this.cancionesService.getAll().subscribe(
      result=>{
        console.log('response correcto %o', result);
        //let cancion: Cancion;
        result.forEach( element => {
            
            this.canciones.push( element );
        });
        
      },
      error=>{
        console.warn(error);
      }
    );


  }

  eliminar( id: number ){
    console.log(`CancionesComponent eliminar ${id}`);
  }

  mockData(){
    this.canciones.push(new Cancion(1,"The Rolling Stones - Under my thumb"));
    this.canciones.push(new Cancion(2,"The Beatles - Drive my car"));
    this.canciones.push(new Cancion(3,"Led Zeppeling - Starway to Heaven"));
    this.canciones.push(new Cancion(4,"Jimi Hendrix - Hey Joe"));
    this.canciones.push(new Cancion(5,"Fleetwood Mac - The Chain"));
    this.canciones.push(new Cancion(6,"Bob Dylan - Like a rolling stone"));
    this.canciones.push(new Cancion(7,"Santana - Soul sacrifice"));
    this.canciones.push(new Cancion(8,"The Police - Walking on the moon"));
    this.canciones.push(new Cancion(9,"Ray Charles - What'd I say"));
    this.canciones.push(new Cancion(10,"Aretha Franklin - Respect"));
  }

}
