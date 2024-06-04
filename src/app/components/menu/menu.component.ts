import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  rutas = [
    { path: 'home', name: 'Home' },
    { path: 'about', name: 'About' },
    { path: 'contact', name: 'Contact' },
    { path: 'posts', name: 'Posts' },
  ];

}
