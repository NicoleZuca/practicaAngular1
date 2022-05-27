import { Producto } from './../producto.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-hijo-c',
  templateUrl: './producto-hijo-c.component.html',
  styleUrls: ['./producto-hijo-c.component.css']
})
export class ProductoHijoCComponent implements OnInit {

  @Input() productoDeLista:Producto; //le indicamos que debe recibir datos del componente padre
  
  @Input() indice:number;
  constructor() { }

  ngOnInit(): void {
  }

 

}
