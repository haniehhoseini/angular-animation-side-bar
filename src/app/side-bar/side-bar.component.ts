import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeInOut } from '../animations/fadeInOut.animation';
import { rotate } from '../animations/rotate.animation';


export class AppModule { }

interface SideNavToggle{
  collapsed : boolean;
  screenwidth : number;
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  animations: [
    fadeInOut,
    rotate
  ]  
})
export class SideBarComponent implements OnInit {

  
  ngOnInit(): void {
    this.screenwidth = window.innerWidth;
  }

  @Output() onToggleSidebar :EventEmitter<SideNavToggle> = new EventEmitter();
 
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenwidth = window.innerWidth;
    if(this.screenwidth <= 768){
      this.collapsed = false;
      this.onToggleSidebar.emit({collapsed: this.collapsed, screenwidth: this.screenwidth});
    }
  }
  collapsed = false;
  screenwidth = 0;
  list = [
    {
      routerLink: 'dashboard',
      icon : 'fa-solid fa-house',
      label: 'dashboard'
    },
    {
      routerLink: 'media',
      icon : 'fa-solid fa-play',
      label: 'media'
    },
    {
      routerLink: 'pages',
      icon : 'fa-solid fa-file',
      label: 'pages'
    },
    {
      routerLink: 'products',
      icon : 'fa-brands fa-product-hunt',
      label: 'products'
    },
    {
      routerLink: 'settings',
      icon : 'fa-solid fa-wrench',
      label: 'settings'
    }
  ];

  toggleCollapsed(){
    this.collapsed = !this.collapsed;
    this.onToggleSidebar.emit({collapsed: this.collapsed, screenwidth: this.screenwidth});
  }
  closesidebar(){
    this.collapsed = false;
    this.onToggleSidebar.emit({collapsed: this.collapsed, screenwidth: this.screenwidth});
  }
}

