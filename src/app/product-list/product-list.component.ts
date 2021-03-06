import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ProductModel } from './product-model';
import { MytoasterService } from '../mytoaster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from '../profile/profile/user-model';
import { ParsedProperty } from '@angular/compiler';

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
  productData : ProductModel[]=[];
  showupdate !: boolean;
  showadd !: boolean;
  submitted = false;
  userId:number
  userDetails:ProfileModel
  selecetdFile:File
  imagePreview : string | ArrayBuffer
  productId:number

  constructor(private formbuilder: FormBuilder, private api: ApiService,
    private toastr:MytoasterService,private route: ActivatedRoute,private navi: Router) { }

  ngOnInit() {
    this.formvalue = this.formbuilder.group({
     // id:['',[Validators.required,Validators.maxLength(4)]],
      image: ['', Validators.required],
      title: ['', [Validators.required, Validators.pattern(/^[A-Z]/)]],
      description: ['', [Validators.required]],
      type: ['', Validators.required],
      category: ['', Validators.required],
      rating: ['', Validators.required],
      price: ['', Validators.required]
    })
    this.formvalue.controls['type'].setValue("Select", {onlySelf: true})
    this.formvalue.controls['category'].setValue("Select", {onlySelf: true})
    
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
      
      //this.productmodelObj.id = this.formvalue.value.id;
      this.productmodelObj.image =  this.imagePreview;
      this.productmodelObj.title = this.formvalue.value.title;
      this.productmodelObj.description = this.formvalue.value.description;
      this.productmodelObj.type = this.formvalue.value.type;
      this.productmodelObj.category = this.formvalue.value.category;
      this.productmodelObj.rating = this.formvalue.value.rating;
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


  onEdit(row: ProductModel) {
    this.formvalue.reset();
    console.log(row)
    this.showupdate = true;
    this.showadd = false;
   // (<HTMLInputElement>document.getElementById("exampleInputid")).disabled= true;
   // this.productmodelObj.id = row.id;
    //this.formvalue.controls['id'].setValue(row.id);
    //this.selecetdFile = row.image
    this.imagePreview = row.image
    this.productId = row.id
    //this.formvalue.controls['imagename'].setValue(row.imagename);
    this.formvalue.controls['title'].setValue(row.title);
    this.formvalue.controls['description'].setValue(row.description);
    this.formvalue.controls['type'].setValue(row.type);
    this.formvalue.controls['category'].setValue(row.category);
    this.formvalue.controls['rating'].setValue(row.rating);
    this.formvalue.controls['price'].setValue(row.price);
    this.formTitle = this._editProduct;
  }


  updateProduct() {
    if (this.formvalue.invalid) {
      return;
    }
    else{
    //this.productmodelObj.id =this.formvalue.value.id;
      this.productmodelObj.image = this.imagePreview;
      this.productmodelObj.title = this.formvalue.value.title;
      this.productmodelObj.description = this.formvalue.value.description;
      this.productmodelObj.type = this.formvalue.value.type;
      this.productmodelObj.category = this.formvalue.value.category;
      this.productmodelObj.rating = this.formvalue.value.rating;
      this.productmodelObj.price = this.formvalue.value.price;
    this.api.updateProduct(this.productmodelObj,this.productId)
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
    this.imagePreview = ''
    //(<HTMLInputElement>document.getElementById("exampleInputid")).disabled= false;
   
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
  onFileUpload(event){
    this.selecetdFile = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () =>{
      this.imagePreview = reader.result
    };
    reader.readAsDataURL(this.selecetdFile)
    console.log(this.selecetdFile);
    }
    
}


