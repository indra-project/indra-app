import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { StationsProvider } from './station/station';

@NgModule({
    providers: [
        StationsProvider,
    ]
})
export class ProvidersModule { }
