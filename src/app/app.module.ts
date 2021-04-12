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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    ForgetPasswordComponent,
    UserComponent,
    AlertComponent    
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
