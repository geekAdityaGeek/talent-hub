import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './app-components/forget-password/forget-password.component';
import { LoginComponent } from './app-components/login/login.component';
import { RegisterUserComponent } from './app-components/register-user/register-user.component';
import { UserComponent } from './app-components/user/user.component';
import { AuthGaurd } from './_helpers/auth.gaurd';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component : RegisterUserComponent},
  { path: 'forgetPassword', component : ForgetPasswordComponent},
  { path: '', component : UserComponent, canActivate : [AuthGaurd]},  
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
