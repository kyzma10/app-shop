import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  currentSlide: number = 0;

  slides: Array<any> = [
    {path: '../../assets/img/item-1.png', status: true},
    {path: '../../assets/img/item-2.png', status: false},
    {path: '../../assets/img/item-3.png', status: false}
  ];

  handleClick(): void {
    let currentItem = (this.currentSlide + 1) % this.slides.length;
    for(let i = 0; i < this.slides.length; i++) {
      if(i === currentItem) {
        this.slides[i].status = true;
      } else this.slides[i].status = false;
    }
    this.currentSlide++;
  }
}
