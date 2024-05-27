import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-side-menu',
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {

  public menuItems = routes
 
    .map( route => route.children ?? [])
    .flat()
    .filter( route => route && route.path)
   .filter( route => !route.path?.includes(':'))
   

  constructor() {


  
  }

}
