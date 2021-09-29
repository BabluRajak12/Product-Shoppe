import { Component, OnInit } from '@angular/core';
import { MytoasterService } from 'src/app/mytoaster.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  backBtn!: boolean;
  proceedBtn!: boolean;
  click: any;
  back: boolean;
  constructor(private toastr :MytoasterService) { }

  ngOnInit() {
  }
  goBack() {
    window.history.back();
  }

  proceed() {
    this.toastr.success("Transaction sucessful");
    alert("While proceed do not refresh or press back button")
    if(this.proceed){
      this.proceedBtn = true;
      this.backBtn = true;
    }
        
  }
}
