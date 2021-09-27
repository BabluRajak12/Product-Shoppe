import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CartService } from 'src/app/cart.service';
import { ProfileModel } from 'src/app/profile/profile/user-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productList:any;
userId:number
userDetails:ProfileModel

  constructor(private api:ApiService, private route: ActivatedRoute,private cartService: CartService) { }
 
  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get("id"));
    this.api.getUser(this.userId).subscribe(res=>{
      this.userDetails = res
    })
    this.getCartProduct();
  }
  getCartProduct(){
    this.api.getcartProduct()
    .subscribe(res =>{
   this.productList=res;
   this.productList.forEach((a:any) => {
     Object.assign(a,{quantity:1,total:a.price});
   });
    })
  }

  addtocart(item :any){
this.cartService.addToCart(item);
// if(id==item){
//   let counter= item+1;
// }
  }
}
