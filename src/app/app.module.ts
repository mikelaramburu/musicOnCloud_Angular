import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//componentes
import { CancionesComponent } from './canciones/canciones.component';

//servicios
import { CancionesService } from './providers/canciones.service';


//pipes

@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [       
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }