

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignalStrengthProvider } from '../providers/signal-strength/signal-strength';
import { FIREBASE_CONFIG } from './app.firebase';

import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    
      ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignalStrengthProvider,
    
  ]
})
export class AppModule {}
