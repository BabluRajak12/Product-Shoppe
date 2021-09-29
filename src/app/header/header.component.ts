import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  searchText:string=''
  @Output() searchOn = new EventEmitter<string>()
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

     inputChange(value:string){
      this.searchOn.emit(value)
     }
}
