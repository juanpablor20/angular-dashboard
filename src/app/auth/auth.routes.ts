
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import DashboardComponent from '../dashboard/dashboard.component';
export const AUTH_ROUTES: Routes = [

    {path: 'register', component: RegisterComponent },
    {path: 'login', component: LoginComponent},
    {path: '', component: DashboardComponent}
];

