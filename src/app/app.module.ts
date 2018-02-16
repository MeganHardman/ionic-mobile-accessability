import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Camera} from "@ionic-native/camera";
import {AndroidFingerprintAuth} from "@ionic-native/android-fingerprint-auth";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {OptionsPage} from "../pages/options/options";
import {MobileAccessibility} from "@ionic-native/mobile-accessibility";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    OptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    OptionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AndroidFingerprintAuth,
    MobileAccessibility
  ]
})
export class AppModule {}
