import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[scrollTop]'
})

export class ScrollTop {
  constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener('click', ()=> {
      let steps: number = window.scrollY;

      function goToTop():void {
        let timer = setInterval(function() {
          window.scrollTo(0, steps);
          steps -= 50;
          if (steps <= 0) {
            window.scrollTo(0, 0);
            clearInterval(timer);
          }

        }, 60);
      }
      goToTop();
    });
  }
}
