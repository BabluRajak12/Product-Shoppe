import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ProductModel } from './product-model';
import { MytoasterService } from '../mytoaster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from '../profile/profile/user-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  formTitle: string = '';
  _addProduct = "ADD NEW PRODUCT";
  _editProduct = "Edit Product"
  productmodelObj: ProductModel = new ProductModel();
  formvalue: FormGroup;
  productData !: any;
  showupdate !: boolean;
  showadd !: boolean;
  submitted = false;
  userId:number
  userDetails:ProfileModel

  constructor(private formbuilder: FormBuilder, private api: ApiService,
    private toastr:MytoasterService,private route: ActivatedRoute,private navi: Router) { }

  ngOnInit() {
    this.formvalue = this.formbuilder.group({
      id:['',[Validators.required,Validators.maxLength(4)]],
      name: ['', [Validators.required, Validators.pattern(/^[A-Z]/)]],
      description: ['', Validators.required],
      price: ['', Validators.required],
    })

    this.userId = Number(this.route.snapshot.paramMap.get("id"));
      this.api.getUser(this.userId).subscribe(res=>{
        this.userDetails = res
      })
    this.getallProduct();
  }

// ****PostFunctionality*****

  postProductDetails() {
    if (this.formvalue.invalid) {
      return;
    }
    else{
      
      this.productmodelObj.id = this.formvalue.value.id;
      this.productmodelObj.name = this.formvalue.value.name;
      this.productmodelObj.description = this.formvalue.value.description;
      this.productmodelObj.price = this.formvalue.value.price;
      this.api.postProduct(this.productmodelObj)
        .subscribe(res => {
          console.log(res);
          this.toastr.success("Product Added Successfully");
          let ref = document.getElementById('cancel');
          ref.click();
          this.formvalue.reset();
          this.getallProduct();
        },
          err => {
            this.toastr.warning("Trying to enter duplicate Id")
          })
    }
  
  }

  // ****GetFunctionality*****

  getallProduct() {
    this.api.getProduct()
      .subscribe(res => {
        this.productData = res;
      })
  }

  // ****deleteFunctionality*****

  deleteProduct(row: any) {
    this.api.deleteProduct(row.id)
      .subscribe(res => {
        this.toastr.info("row is deleted");
        this.getallProduct();

      })
  }


  onEdit(row: any) {
    this.showupdate = true;
    this.showadd = false;
    (<HTMLInputElement>document.getElementById("exampleInputid")).disabled= true;
    this.productmodelObj.id = row.id;
    this.formvalue.controls['id'].setValue(row.id);
    this.formvalue.controls['name'].setValue(row.name);
    this.formvalue.controls['description'].setValue(row.description);
    this.formvalue.controls['price'].setValue(row.price);
    this.formTitle = this._editProduct;
  }


  updateProduct() {
    if (this.formvalue.invalid) {
      return;
    }
    else{
    this.productmodelObj.id =this.formvalue.value.id;
    this.productmodelObj.name = this.formvalue.value.name;
    this.productmodelObj.description = this.formvalue.value.description;
    this.productmodelObj.price = this.formvalue.value.price;
    this.api.updateProduct(this.productmodelObj, this.productmodelObj.id)
      .subscribe(res => {
        this.toastr.success("Product Updated Successfully");
        let ref = document.getElementById('cancel');
        ref.click();
        this.formvalue.reset();
        this.getallProduct();
      })
    }
  }


  clickAddDisable() {
    this.formvalue.reset();
    this.showadd = true;
    this.showupdate = false;
    this.formTitle = this._addProduct;
    (<HTMLInputElement>document.getElementById("exampleInputid")).disabled= false;
   
  }

  // Input field Validation
  // *********************
  get f() {
    return this.formvalue.controls;
  }

  onSubmit() {
    this.submitted = true;
  
  }
  // onProfilePage(){
  //   this.navi.navigate(['profile'], { 'queryParams': this.});
  // }
  
}


