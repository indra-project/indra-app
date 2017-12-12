import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SensorPage } from './../sensor/sensor';
import { HistoryPage } from './../history/history';

import { StationsProvider } from './../../providers/station/station';

@IonicPage()
@Component({
  selector: 'page-station',
  templateUrl: 'station.html',
})
export class StationPage {

  station: any = {};
  sensors: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public stationsProvider: StationsProvider
  ) {
    this.station = navParams.data.station;

    stationsProvider.getSensors(this.station.mac_address)
      .subscribe(sensors => {
        this.sensors = sensors;
      });
  }

  openSensor(sensor) {
    this.navCtrl.push(SensorPage, { sensor });
  }

  openHistory(station) {
    this.navCtrl.push(HistoryPage, { station });
  }

}
