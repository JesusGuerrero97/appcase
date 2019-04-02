import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {UsersPage} from "../pages/users/users";
import {UserProfileComponent} from "../components/user-profile/user-profile";
import {UserActivitiesComponent} from "../components/user-activities/user-activities";
import {UserConfigComponent} from "../components/user-config/user-config";
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ApiClientProvider } from '../providers/api-client/api-client';
import {HttpClientModule} from "@angular/common/http";
import { UserConfigurationPage } from '../pages/user-configuration/user-configuration';
import { ProfilePage } from '../pages/profile/profile';
import { ApiConfigApiConfigProvider } from '../providers/api-config-api-config/api-config-api-config';
import { ApiConfigProvider } from '../providers/api-config/api-config';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UsersPage,
    SignUpPage,
    ProfilePage,
    UserConfigurationPage,
    UserProfileComponent,
    UserConfigComponent,
    UserActivitiesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    ProfilePage,
    UserConfigurationPage,
    UsersPage,
    UserProfileComponent,
    UserConfigComponent,
    UserActivitiesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiClientProvider,
    ApiConfigApiConfigProvider,
    ApiConfigProvider
  ]
})
export class AppModule {}
