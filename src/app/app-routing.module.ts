import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ForgetPasswordComponent } from './app-components/forget-password/forget-password.component';
import { LoginComponent } from './app-components/login/login.component';
import { RegisterUserComponent } from './app-components/register-user/register-user.component';
import { ConnectionsComponent } from './app-components/user/connections/connections.component';
import { FeedsComponent } from './app-components/user/feeds/feeds.component';
import { ProfileComponent } from './app-components/user/profile/profile.component';
import { UserComponent } from './app-components/user/user.component';
import { AuthGaurd } from './_helpers/auth.gaurd';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component : RegisterUserComponent},
  { path: 'forgetPassword', component : ForgetPasswordComponent},
  { path: '', canActivate : [AuthGaurd], children:[
    {path : '', pathMatch:"full", redirectTo:"feeds"},
    {path : 'feeds', component:FeedsComponent},
    {path : 'connections', component:ConnectionsComponent},
    {path : 'profile', component:ProfileComponent},
  ]},  
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
