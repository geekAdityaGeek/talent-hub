import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './app-components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './app-components/register-user/register-user.component';
import { ForgetPasswordComponent } from './app-components/forget-password/forget-password.component';
import { UserComponent } from './app-components/user/user.component';
import { jwtInterceptor } from './_helpers/jwt.interceptor';
import { AlertComponent } from './_components/alert/alert.component';
import { FeedsComponent } from './app-components/user/feeds/feeds.component';
import { ConnectionsComponent } from './app-components/user/connections/connections.component';
import { ProfileComponent } from './app-components/user/profile/profile.component';
import { PostCardComponent } from './_components/post-card/post-card.component';
import { FollowingComponent } from './app-components/user/connections/following/following.component';
import { FollowerComponent } from './app-components/user/connections/follower/follower.component';
import { NewConnectionsComponent } from './app-components/user/connections/new-connections/new-connections.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    ForgetPasswordComponent,
    UserComponent,
    AlertComponent,
    FeedsComponent,
    ConnectionsComponent,
    ProfileComponent,
    PostCardComponent,
    FollowingComponent,
    FollowerComponent,
    NewConnectionsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
