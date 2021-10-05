import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MytoasterService } from '../mytoaster.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  showLogout!:boolean;
  // public signupForm = FormGroup;  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private toastr:MytoasterService) { }

  ngOnInit() {
  this.signupForm = this.formBuilder.group({
   fullname: ['', Validators.required],
   email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
   password: ['', Validators.required],
   mobile: ['', Validators.required] ,
   role: ['', Validators.required],
   designation:['', Validators.required],
   address:['', Validators.required]
  })
  this.signupForm.controls['role'].setValue("Select", {onlySelf: true})
  }
  signup(){
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
    .subscribe(res => {
      this.toastr.success("Signup successfull")
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      this.toastr.warning("Something wend wrong!");
    })
    this.showLogout= true; 
  }
  
}
