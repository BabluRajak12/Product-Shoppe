import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
public product :any =[];
public grandTotal !:number;
  constructor(private cartService :CartService) { }

  ngOnInit() {
    this.cartService.getProduct()
    .subscribe(res => {
      this.product = res;
      this.grandTotal= this.cartService.getTotalPrice()
    })
                  
 

}
removeitem(item : any){
  this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

}
