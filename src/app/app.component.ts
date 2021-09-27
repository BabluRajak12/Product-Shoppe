import { Component } from '@angular/core';
import { MytoasterService } from './mytoaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-shopee';

  constructor(private toastr: MytoasterService){

  }
  // logout(){
  //   this.toastr.success("Successfully logout!");
  // }
}
