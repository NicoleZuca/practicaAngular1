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

  productos:Producto[]=[
    
    //instanciar la clase producto
    new Producto("Camisa", "Talla S", "16/05/22", 5000, 10),
    new Producto("Blusa", "Talla M", "16/05/22", 4500, 12),
    new Producto("Pantalón", "Talla 32", "16/05/22", 10000, 20),
    new Producto("Enagua", "Talla S", "16/05/22", 12000, 10),
    new Producto("Vestido", "Talla M", "16/05/22", 15000, 8),
    new Producto("Short", "Talla 3/4", "16/05/22", 8000, 12),
    new Producto("Camiseta", "Talla L", "16/05/22", 5000, 25),
    new Producto("Suéter", "Talla L", "16/05/22", 10000, 14),
    new Producto("Jacket", "Talla M", "16/05/22", 17000, 12),
    new Producto("Licra", "Talla S", "16/05/22", 10000, 20),
    new Producto("Top", "Talla S", "16/05/22", 8000, 18),
    new Producto("Botines", "Talla 37", "16/05/22", 19000, 10),
    new Producto("Tenis", "Talla 42", "16/05/22", 23000, 15),
    new Producto("Sandalias", "Talla 35", "16/05/22", 7000, 5),
    new Producto("Zapato", "Talla 40", "16/05/22", 16000, 8),

  ];

}
