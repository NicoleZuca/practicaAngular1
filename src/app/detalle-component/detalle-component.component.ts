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

    this.indice=this.route.snapshot.params['id'];

    let producto:Producto=this.productoService.encontrarProducto(this.indice); //encontrar el producto con el id que le estamos enviando
  
    this.cuadroNombre=producto.nombre; //cargar en el formulario los datos del empleado
    this.cuadroDescripcion=producto.descripcion;
    this.cuadroFechaIngreso=producto.fechaIngreso;
    this.cuadroPrecio=producto.precio;
    this.cuadroCantidad=producto.cantidad;

  }

  volverInicio(){

    this.router.navigate(['productos']);

  }

  verProducto(){
     
    let miProducto=new Producto(this.cuadroNombre, this.cuadroDescripcion, this.cuadroFechaIngreso, this.cuadroPrecio, this.cuadroCantidad);

    this.router.navigate(['']);

  }

  cuadroNombre:string="";
  cuadroDescripcion:string="";
  cuadroFechaIngreso:string="";
  cuadroPrecio:number=0;
  cuadroCantidad:number=0;

  indice:number;
}
