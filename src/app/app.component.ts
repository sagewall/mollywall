import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mollywall';
  public slides = [
    { src: '/assets/IMG_20200111_122804.jpg' },
    { src: '/assets/IMG_20200304_203450.jpg' },
    { src: '/assets/IMG_20200420_124604.jpg' },
  ];
}
