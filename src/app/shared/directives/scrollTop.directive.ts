import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[scrollTop]'
})

export class ScrollTop {

  @HostListener('click') onClick() {
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
  }
}
