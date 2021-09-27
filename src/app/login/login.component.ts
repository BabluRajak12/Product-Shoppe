import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MytoasterService } from '../mytoaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private toastr: MytoasterService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      if(user){
        this.toastr.success("Login success!");
        this.loginForm.reset();
        this.router.navigate(['productlist']);
      }
      else{
        this.toastr.warning("User is invalid!");
      }
    },err=>{
      this.toastr.warning("Something wend wrong!")
    })
  }
  
}
