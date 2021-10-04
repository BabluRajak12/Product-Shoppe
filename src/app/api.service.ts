import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { ProfileModel } from './profile/profile/user-model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postProduct(data:any){
    return this.http.post<any>("http://localhost:3000/products",data)
.pipe(map((res:any)=>{
return res;
}))
  }
  getProduct():Observable<any>{
    return this.http.get<any>("http://localhost:3000/products")
.pipe(map((res:any)=>{
return res;
}))
  }
  updateProduct(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/products/"+id,data)
.pipe(map((res:any)=>{
return res;
}))
  }
  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/products/"+id)
.pipe(map((res:any)=>{
return res;
}))
  }

  getUser(id:number):Observable<any>{
    return this.http.get<any>("http://localhost:3000/signupUsers/"+id)
.pipe(map((res:any)=>{
return res;
}))
  }
 
  updateUser(id:number,data:ProfileModel):Observable<any>{
    return this.http.put<any>("http://localhost:3000/signupUsers/"+id,data)
.pipe(map((res:any)=>{
return res;
}))
  }
getcartProduct(){
  return this.http.get<any>("http://localhost:3000/products")
  .pipe(map((res:any) =>{
    return res;
  }))
}

}
