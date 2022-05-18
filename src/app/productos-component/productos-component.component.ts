import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto.models';
import { ProductoService } from '../productos.service';

@Component({
  selector: 'app-productos-component',
  templateUrl: './productos-component.component.html',
  styleUrls: ['./productos-component.component.css']
})
export class ProductosComponentComponent implements OnInit {

  pagActual:number=1; //declaración de la variable para la paginación
  constructor(private router:Router, private productoService:ProductoService) { } //inyectar el servicio de referencia

  //Array para almacenar los productos
  productos:Producto[]=[];

  ngOnInit(): void {

    //almacenar la información al array productos:Producto[]=[]; que viene de la inyección del servicio
    this.productos=this.productoService.productos;

  }

  volverInicio(){

    this.router.navigate(['']);

  }

}

