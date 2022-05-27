import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto.models';
import { ProductoService } from '../productos.service';

@Component({
  selector: 'app-detalle-component',
  templateUrl: './detalle-component.component.html',
  styleUrls: ['./detalle-component.component.css']
})
export class DetalleComponentComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private productoService:ProductoService) { } //inyectar el servicio de referencia

  //Array para almacenar los productos
  productos:Producto[]=[];

  ngOnInit(): void {

    //almacenar la información al array productos:Producto[]=[]; que viene de la inyección del servicio
    this.productos=this.productoService.productos;

    this.indice=this.route.snapshot.params['id']; //crear el indice que viene de la URL

    let producto:Producto=this.productoService.encontrarProducto(this.indice); //crear una variable tipo producto para almacenar la información ahí y poder encontrar el producto con el id que le estamos enviando
  
    this.cuadroNombre=producto.nombre; //cargar en el formulario los datos del empleado
    this.cuadroDescripcion=producto.descripcion;
    this.cuadroFechaIngreso=producto.fechaIngreso;
    this.cuadroPrecio=producto.precio;
    this.cuadroCantidad=producto.cantidad;

  }

  volverInicio(){
    //ruta que lo dirige hacia el módulo productos
    this.router.navigate(['productos']);

  }

  volverProductos(){
    this.router.navigate(['tablaProductos']);
  }

  verProducto(){
     
    let miProducto=new Producto(this.cuadroNombre, this.cuadroDescripcion, this.cuadroFechaIngreso, this.cuadroPrecio, this.cuadroCantidad);

  }

  //declaración de las propiedades para el formulario
  cuadroNombre:string="";
  cuadroDescripcion:string="";
  cuadroFechaIngreso:string="";
  cuadroPrecio:number=0;
  cuadroCantidad:number=0;

  indice:number; //declarar el indice para usarlo en las rutas para acceder al detalle de cada producto
}
