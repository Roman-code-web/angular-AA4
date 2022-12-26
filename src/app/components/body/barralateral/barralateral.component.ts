import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-barralateral',
  templateUrl: './barralateral.component.html',
  styleUrls: ['./barralateral.component.css'],
})
export class BarralateralComponent {
  titulo="Menu";
  palabraHijo!:string;
  //entrada
  @Input() listaArrayhijo = [];
  //Salida
  @Output() onSeleccionPalabra=new EventEmitter(); 
  seleccionaPalabra(Palabra:String){
    this.palabraHijo=String(Palabra);
    //console.log(this.palabraHijo);
    this.onSeleccionPalabra.emit(this.palabraHijo);
  }

}
