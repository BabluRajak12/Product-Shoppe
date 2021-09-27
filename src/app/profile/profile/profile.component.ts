import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MytoasterService } from 'src/app/mytoaster.service';
import { ProfileModel } from '../profile/user-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId:number
  formValue : FormGroup
  userDetails:ProfileModel
  userObj:ProfileModel = new ProfileModel()
  constructor(private route:ActivatedRoute,private api:ApiService,private formBuilder:FormBuilder
    ,private toastr:MytoasterService) { }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get("id"));
      this.getUser(this.userId)
      this.formValue= this.formBuilder.group({
        fullname:['',[Validators.required]],
        email:['',[Validators.required]],
        mobile:['',Validators.required],
        password:['',Validators.required],
        designation:['',Validators.required],
        address:['',Validators.required]
      })
  }
  get controls(){
    return this.formValue.controls
  }
  OnEdit(){
    this.formValue.controls['fullname'].setValue(this.userDetails.fullname)
    this.formValue.controls['email'].setValue(this.userDetails.email)
    this.formValue.controls['mobile'].setValue(this.userDetails.mobile)
    this.formValue.controls['password'].setValue(this.userDetails.password)
    this.formValue.controls['designation'].setValue(this.userDetails.designation)
    this.formValue.controls['address'].setValue(this.userDetails.address)
  }
  onSave(){
    this.userObj.fullname = this.formValue.value.fullname
    this.userObj.email = this.formValue.value.email
    this.userObj.mobile = this.formValue.value.mobile
    this.userObj.password = this.formValue.value.password
    this.userObj.designation = this.formValue.value.designation
    this.userObj.address = this.formValue.value.address
    this.userObj.role = this.userDetails.role
    this.api.updateUser(this.userDetails.id,this.userObj).subscribe(res=>{
      this.toastr.success("Profile Updated Successfully")
      let ref = document.getElementById('cancel');
      ref.click();
      this.formValue.reset()
      this.getUser(this.userDetails.id)
    })
  }

  getUser(id:number){
    this.api.getUser(id).subscribe(res=>{
      this.userDetails = res
    })
  }

}
