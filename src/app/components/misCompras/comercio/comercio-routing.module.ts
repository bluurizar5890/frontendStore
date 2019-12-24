import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';


const routes: Routes = [{
  path:'',
  children:[{
    path:'productos',
    component:ProductosComponent
  },
{
  path:'detalle/:id',
  component:DetalleProductoComponent
}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercioRoutingModule { }