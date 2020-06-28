import { Component } from '@angular/core';
import { Slide } from './slide';
import { SLIDES } from './slides';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public slides: Slide[] = SLIDES;
}
