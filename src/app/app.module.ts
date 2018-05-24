import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ModismoPage } from '../pages/modismo/modismo';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
import { BrowserModule } from '@angular/platform-browser';
import { MetropolitanaPage } from '../pages/metropolitana/metropolitana';
//Plugins
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ModismoPage,
    HomePage,
    TabsPage,
    MetropolitanaPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ModismoPage,
    HomePage,
    TabsPage,
    AccountPage,
    MetropolitanaPage
  ],
  providers: [
     GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
