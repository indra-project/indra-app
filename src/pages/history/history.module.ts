import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';

import { PipesModule } from './../../pipes/pipes.module';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage),
    PipesModule,
    ChartsModule,
  ],
})
export class HistoryPageModule { }
