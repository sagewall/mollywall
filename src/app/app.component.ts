import { Component } from '@angular/core';
import { SLIDES } from './slides';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mollywall';
  public slides = SLIDES;
}
