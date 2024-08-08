import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BodyComponent } from './body/body.component';

interface SideBar{
  collapsed : boolean;
  screenwidth : number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideBarComponent,
    BodyComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sample';

  isSidebarCollapsed = false;
  screenWidth = 0;

  onToggleSidebar(data: SideBar): void {
    this.isSidebarCollapsed = data.collapsed;
    this.screenWidth = data.screenwidth;
  }
}
