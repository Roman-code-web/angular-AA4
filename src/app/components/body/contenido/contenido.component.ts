import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  titulo="Agrega Palabra";
  listaArray:any[]=[];

  @Input() palabrainput!:string;//Ingreso
  @Output() onlistaArraysalida=new EventEmitter(); //Salida

  agregarPalabra(inputPalabra:string){
    this.listaArray.push(String(inputPalabra));
    this.onlistaArraysalida.emit(this.listaArray)//emite el array actualizado
  }
  
}
