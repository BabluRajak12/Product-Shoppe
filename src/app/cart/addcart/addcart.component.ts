import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CartService } from 'src/app/cart.service';
import { ProfileModel } from 'src/app/profile/profile/user-model';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
public product :any =[];
public grandTotal !:number;
userId:number
userDetails:ProfileModel
  constructor(private cartService :CartService,private api:ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cartService.getProduct()
    .subscribe(res => {
      this.product = res;
      this.grandTotal= this.cartService.getTotalPrice()
    })
    this.userId = Number(this.route.snapshot.paramMap.get("id"));
    this.api.getUser(this.userId).subscribe(res=>{
      this.userDetails = res
    })           
 

}
removeitem(item : any){
  this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

}
