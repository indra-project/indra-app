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
  isSaving: boolean = false;

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

  onChangeStationStatus(status) {
    this.isSaving = true;

    this.stationsProvider.setStationStatus(this.station.id, status === true ? 1 : 0)
      .subscribe(station => {
        this.station = station;
        this.isSaving = false;
      }, err => {
        this.isSaving = false;
      });
  }

  openSensor(sensor) {
    this.navCtrl.push(SensorPage, { sensor, station: this.station });
  }

  openHistory(station) {
    this.navCtrl.push(HistoryPage, { station });
  }

}
