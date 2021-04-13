import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ForgetPasswordComponent } from './app-components/forget-password/forget-password.component';
import { LoginComponent } from './app-components/login/login.component';
import { RegisterUserComponent } from './app-components/register-user/register-user.component';
import { ConnectionsComponent } from './app-components/user/connections/connections.component';
import { FollowerComponent } from './app-components/user/connections/follower/follower.component';
import { FollowingComponent } from './app-components/user/connections/following/following.component';
import { NewConnectionsComponent } from './app-components/user/connections/new-connections/new-connections.component';
import { FeedsComponent } from './app-components/user/feeds/feeds.component';
import { AccomplishmentsComponent } from './app-components/user/profile/accomplishments/accomplishments.component';
import { BasicDetailsComponent } from './app-components/user/profile/basic-details/basic-details.component';
import { ProfileComponent } from './app-components/user/profile/profile.component';
import { SettingsComponent } from './app-components/user/profile/settings/settings.component';
import { UserComponent } from './app-components/user/user.component';
import { AuthGaurd } from './_helpers/auth.gaurd';
import { Accomplishment } from './_model/accomplishment';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component : RegisterUserComponent},
  { path: 'forgetPassword', component : ForgetPasswordComponent},
  { path: '', canActivate : [AuthGaurd], children:[
    {path : '', pathMatch:"full", redirectTo:"feeds"},
    {path : 'feeds', component:FeedsComponent},
    {path : 'connections', component:ConnectionsComponent, children:[
      {path : '', pathMatch:"full", redirectTo:"following"},
      {path : 'following', component:FollowingComponent},
      {path : 'follower', component:FollowerComponent},
      {path : 'newconnections', component:NewConnectionsComponent},

    ]},
    {path : 'profile', component:ProfileComponent, children :[
      {path:'', pathMatch:"full", redirectTo:'basicdetails'},
      {path:'basicdetails', component:BasicDetailsComponent},
      {path:'accomplishments', component : AccomplishmentsComponent},
      {path:'settings', component : SettingsComponent},
    ]},
  ]},  
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
