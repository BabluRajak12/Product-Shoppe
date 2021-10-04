import { Component, OnInit } from '@angular/core';
import { MytoasterService } from 'src/app/mytoaster.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  formvalue: FormGroup;
  submitted: boolean = false;
  constructor(private toastr :MytoasterService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.formvalue = this.formbuilder.group({
      cardNo: ['', Validators.required],
      ExpireDate: ['', Validators.required],
      cardHoldername: ['', Validators.required],
      cvv: ['', Validators.required]
    })
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
  get f() {
    return this.formvalue.controls;
  }

  onSubmit() {
    this.submitted = true;
  
  }
}
