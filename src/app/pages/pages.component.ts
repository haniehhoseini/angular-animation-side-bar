import { Component } from '@angular/core';
import { move } from '../animations/move.animation';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
  animations: [
    // Add your animation here
    move
  ]
})
export class PagesComponent {

}
