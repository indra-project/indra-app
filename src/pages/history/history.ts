import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StationsProvider } from './../../providers/station/station';

const allSensors = { id: '*', name: 'Todos' };

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  station: any = {};
  history: any[] = [];

  sensorOptions: any[] = [];

  filter: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public stationsProvider: StationsProvider
  ) {
    this.station = navParams.data.station;

    stationsProvider.getHistory(this.station.id)
      .subscribe(history => {
        this.history = history;
        this.sensorOptions = [allSensors, ...history];
      });


    let startDate: any = new Date();
    startDate.setHours(0, 0, 0, 0);
    startDate = startDate.toISOString();

    let endDate: any = new Date;
    endDate.setHours(23, 59, 59, 999);
    endDate = endDate.toISOString();

    let sensor = allSensors.id;
    this.filter = { startDate, endDate, sensor };
  }
}

