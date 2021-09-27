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



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HostDirective,
    ProductComponent,
    AddcartComponent
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
