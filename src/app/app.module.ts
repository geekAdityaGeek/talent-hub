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
import { ConnectionCardComponent } from './_components/connection-card/connection-card.component';
import { BasicDetailsComponent } from './app-components/user/profile/basic-details/basic-details.component';
import { AccomplishmentsComponent } from './app-components/user/profile/accomplishments/accomplishments.component';
import { SettingsComponent } from './app-components/user/profile/settings/settings.component';
import { DatePipe } from '@angular/common';
import { UploadsComponent } from './app-components/user/uploads/uploads.component';
import { NewUploadsComponent } from './app-components/user/uploads/new-uploads/new-uploads.component';
import { PreviousUploadsComponent } from './app-components/user/uploads/previous-uploads/previous-uploads.component';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostDetailComponent } from './_components/post-detail/post-detail.component';
import { PortfolioModalComponent } from './_components/portfolio-modal/portfolio-modal.component';
import { PortfolioComponent } from './app-components/user/profile/portfolio/portfolio.component';


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
    NewConnectionsComponent,
    ConnectionCardComponent,
    BasicDetailsComponent,
    AccomplishmentsComponent,
    SettingsComponent,
    UploadsComponent,
    NewUploadsComponent,
    PreviousUploadsComponent,
    PostDetailComponent,
    PortfolioModalComponent,
    PortfolioComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true },DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent, PostDetailComponent, PortfolioModalComponent]
})
export class AppModule { }
