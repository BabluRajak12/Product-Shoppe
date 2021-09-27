import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'product-shopee';
   displayNav: boolean = false; 
   public totalItem : number  =0;
constructor(private cartservice:CartService ){}
  ngOnInit() {
    this.cartservice.getProduct()
    .subscribe(res => {
this.totalItem=res.length;
    })
  }
     openNav() {
      this.displayNav = true;
    }
    
     closeNav() {
      this.displayNav = false;
     }
  
}


