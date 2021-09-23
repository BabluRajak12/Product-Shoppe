import { AfterViewInit, Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective implements AfterViewInit {

  constructor() { }
  @HostBinding('style.border') border : string;
@HostBinding('style.color') color :string;
@HostBinding('style.font-weight') fontweight :string;

  ngAfterViewInit(){
  }
  @HostListener('mouseover')
  onMouseOver() {
    this.border =" 3px solid black";
    this.color ="black";
    this.fontweight ="800";
   
  }
  @HostListener('mouseleave')
   onMouseLeave(){
  this.border = "";
  this.color = "";
  this.fontweight ="";
 
   }

}
