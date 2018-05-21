import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Directive({
  selector: '[scroll-inf]'
})

export class ScrollInf {

  constructor(private elem: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(null);
  }

  @HostListener('window:scroll') onScroll() {
    // console.log(this.elem.nativeElement.clientHeight);
    if (this.elem.nativeElement.scrollTop + this.elem.nativeElement.clientHeight >= this.elem.nativeElement.scrollHeight) {
      this.loadMore();
    }
    // this.loadMore();
  }

  private setColor(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

  loadMore() {
    console.log('more');
  }

}
