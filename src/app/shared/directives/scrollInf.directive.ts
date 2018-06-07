import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[scroll-inf]'
})

export class ScrollInf {

  constructor(private elem: ElementRef) {}

  @Output() scrollTo = new EventEmitter();

  @HostListener('window:scroll') onScroll() {

    if ( this.elem.nativeElement.clientHeight <= window.pageYOffset + 700) {
      this.scrollTo.emit();
      // console.log('download');
    }
  }

}
