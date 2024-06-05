import { CommonModule } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from 'express';



@Component({
  selector: 'app-login',
  standalone: true,
 // providers: [QuestionControlService],
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }


  

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
    }
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //     // Handle login logic here
  //     this.router.navigate(['/dashboard']); // Redirect to the dashboard or desired route
  //   }
  // }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }



}




