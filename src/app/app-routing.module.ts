import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcartComponent } from './cart/addcart/addcart.component';
import { ProductComponent } from './cart/product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:"cart",component:ProductComponent},
  {path:"product", component:ProductListComponent},
  {path:"addcart",component:AddcartComponent}

];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
