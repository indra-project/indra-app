import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StationsPage } from './stations';

import { PipesModule } from './../../pipes/pipes.module';

@NgModule({
  declarations: [
    StationsPage,
  ],
  imports: [
    IonicPageModule.forChild(StationsPage),
    PipesModule
  ],
})
export class StationsPageModule { }
