import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryFilterPage } from './history-filter';

@NgModule({
  declarations: [
    HistoryFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryFilterPage),
  ],
})
export class HistoryFilterPageModule {}
