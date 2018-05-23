import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  currentSlide = 0;

  handleClick() {
    let items = document.getElementsByClassName('slider__item');
      items[this.currentSlide].className = 'slider__item';
      this.currentSlide = (this.currentSlide + 1) % items.length;
      items[this.currentSlide].className = 'slider__item slider__show';
  };
}
