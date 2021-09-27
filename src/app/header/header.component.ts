import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProfileModel } from '../profile/profile/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'product-shopee';
  displayNav: boolean = false; 
  public totalItem : number  =0;
  @Input() userDetails : ProfileModel
  constructor(private cartservice:CartService) { }

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
