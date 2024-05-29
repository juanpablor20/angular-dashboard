import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type grade = 'A'|'B'|'F';
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {


  public showContent = signal(false);
  public grade = signal<grade>('A');


  public toggleContent() {
    this.showContent.update( value => !value );

  }
  
}
