import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { StationsPageModule } from '../pages/stations/stations.module';
import { StationPageModule } from '../pages/station/station.module';
import { SensorPageModule } from '../pages/sensor/sensor.module';
import { HistoryPageModule } from '../pages/history/history.module';
import { HistoryFilterPageModule } from '../pages/history-filter/history-filter.module';

import { PipesModule } from '../pipes/pipes.module';
import { ProvidersModule } from '../providers/providers.module';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ProvidersModule,
    StationsPageModule,
    StationPageModule,
    SensorPageModule,
    HistoryPageModule,
    HistoryFilterPageModule,
    PipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
