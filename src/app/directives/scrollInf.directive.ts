import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[scroll-inf]'
})

export class ScrollInf {

  constructor(private elem: ElementRef) {}

  @Output() scrollTo = new EventEmitter();

  @HostListener('window:scroll') onScroll() {
    this.scrollTo.emit();
    if (this.elem.nativeElement.scrollTop + this.elem.nativeElement.clientHeight > this.elem.nativeElement.scrollHeight) {
      this.scrollTo.emit();
      // console.log('download');
    }
  }

}
