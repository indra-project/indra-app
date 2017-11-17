import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileStationPage } from './mobile-station';

@NgModule({
  declarations: [
    MobileStationPage,
  ],
  imports: [
    IonicPageModule.forChild(MobileStationPage),
  ],
})
export class MobileStationPageModule {}
