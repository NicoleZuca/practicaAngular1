import { ProductoService } from './productos.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductoHijoCComponent } from './producto-hijo-c/producto-hijo-c.component';
import { InicioComponentComponent } from './inicio-component/inicio-component.component';
import { ProductosComponentComponent } from './productos-component/productos-component.component';
import { PromocionesComponentComponent } from './promociones-component/promociones-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponentComponent } from './detalle-component/detalle-component.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component'; 
import { TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes:Routes=[ //constante donde se van a almacenar las rutas

  {path:'',component:InicioComponentComponent},
  {path:'productos',component:ProductosComponentComponent},
  {path: 'tablaProductos', component:TablaProductosComponent},
  {path:'promociones',component:PromocionesComponentComponent},
  {path:'contacto',component:ContactoComponentComponent},
  {path: 'detalle/:id', component:DetalleComponentComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ProductoHijoCComponent,
    InicioComponentComponent,
    ProductosComponentComponent,
    PromocionesComponentComponent,
    ContactoComponentComponent,
    DetalleComponentComponent,
    TablaProductosComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    TableModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
