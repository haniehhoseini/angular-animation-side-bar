
import { Component } from '@angular/core';
import { fade } from '../animations/fade.animation';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
  animations: [
    fade
  ]
})
export class SettingComponent {

}
