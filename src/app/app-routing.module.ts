import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcartComponent } from './cart/addcart/addcart.component';
import { ProductComponent } from './cart/product/product.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"cart",component:ProductComponent},
  {path:"product", component:ProductListComponent},
  {path:"addcart",component:AddcartComponent},

  {path:"productlist", component:ProductListComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
