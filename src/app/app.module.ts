import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HostDirective } from './host.directive'; 
import { MytoasterService } from './mytoaster.service';
import { ProductComponent } from './cart/product/product.component';
import { AddcartComponent } from './cart/addcart/addcart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './cart/payment/payment.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { StarComponent } from './cart/star/star.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HostDirective,
    ProductComponent,
    AddcartComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HeaderComponent,
    PaymentComponent,
    FilterpipePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,NgxPaginationModule,Ng2SearchPipeModule
  

  ],
  providers: [MytoasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
