import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../producto.models';
import { ProductoService } from '../productos.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})

export class TablaProductosComponent implements OnInit {

  productos:Producto[];
  @Input() productoDeLista:Producto; //le indicamos que debe recibir datos del componente padre
  
  @Input() indice:number;
  producto:Producto[];

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.verProductos();
  }

  verProductos()
  {
    this.productos=this.productoService.productos;
  }

}
