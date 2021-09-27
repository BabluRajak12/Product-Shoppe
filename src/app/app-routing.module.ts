import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"productlist/:id", component:ProductListComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"profile/:id", component: ProfileComponent},
  {path:'', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
