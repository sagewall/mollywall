import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [animate('600ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input()
  slides: Slide[] = [];
  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {
    this.preloadImages();
  }

  preloadImages(): void {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
}
