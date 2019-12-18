import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { ProductoComponent } from './producto.component';
import { ImagenesComponent } from './imagenes/imagenes.component';


const routes: Routes = [
  { path: 'registrarproducto', component: RegistrarProductoComponent},
  { path: 'imagenes', component: ImagenesComponent},
  { path: '**', component: ProductoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
