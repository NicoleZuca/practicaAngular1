export class Producto{ //creación de la clase

    //constructor encargado de crear los objetos, recibiendolos por parámetros
    constructor(nombre:string, descripcion:string, fechaIngreso:string, precio:number, cantidad:number){
        
        //los this hacen referencia al campo de clase
        
        this.nombre=nombre; 
        this.descripcion=descripcion;
        this.fechaIngreso=fechaIngreso;
        this.precio=precio;
        this.cantidad=cantidad;

    }

    //declaración de las propiedades
    nombre:string="";
    descripcion:string="";
    fechaIngreso:string="";
    precio:number=0;
    cantidad:number=0;

}