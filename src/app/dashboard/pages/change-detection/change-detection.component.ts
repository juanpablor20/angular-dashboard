import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { release } from 'os';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

  <app-title [title]="correntFramework()" />
 
 
 
  <pre> {{ frameworkAsSignal() | json }}</pre>
  <pre> {{ frameworkAsPropety | json }}</pre>
  
  `
})
export default class ChangeDetectionComponent {


  public correntFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }` 
  );
 public frameworkAsSignal = signal({
  name: 'Angular',
  releaseDate: 2016,
 })
public frameworkAsPropety = {
  name: 'Angular',
  releaseDate: 2016,
};

constructor()  {
  setTimeout(() => {
    this.frameworkAsSignal.update( value => ({
     ...value,
    }))
    //this.frameworkAsPropety.name = 'react';
    console.log('hecho');
  },3000);
}

}
