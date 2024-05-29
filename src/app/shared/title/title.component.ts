import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-title',
  template: `
  <h1>{{ title }}</h1>
  `

})
export class TitleComponent {


 @Input({ required:true }) title!: string;
}
