import { Injectable } from '@angular/core';

declare let toastr:any
@Injectable({
  providedIn: 'root'
})
export class MytoasterService {
  options: any;

  success(message:string,title?:string){
    toastr.success(message,title)
  
  }
  info(message:string,title?:string){
    toastr.info(message,title)
  }
  warning(message:string,title?:string){
    toastr.warning(message,title)
  }
  error(message:string,title?:string){
    toastr.error(message,title)
  }
}



// success(arg0: string, arg1: string, arg2: { disableTimeOut: boolean; }) {
//   throw new Error('Method not implemented.');
// }

// options: IndividualConfig;

// constructor(
//     private toastr: ToastrService
// ) {
//     this.options = this.toastr.toastrConfig;
//     this.options.positionClass = 'toast-top-center';
//     this.options.timeOut = 1500;
// }

// showToast(title, message, type) {
//     this.toastr.show(message, title, this.options, 'toast-' + type);
// }