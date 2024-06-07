import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';
import { HeroSectionComponent } from '../shared/hero-section/hero-section.component';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule,SidemenuComponent, NavbarComponent, HeroSectionComponent],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export default class DashboardComponent {}
