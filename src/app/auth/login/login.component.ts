import { LoginBase } from './../../core/models/loginbase.interface';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
 // providers: [QuestionControlService],
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {

  @Input() question!:LoginBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}


