import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { StationsProvider } from './../../providers/station/station';

@IonicPage()
@Component({
  selector: 'page-sensor',
  templateUrl: 'sensor.html',
})
export class SensorPage {

  station: any = {};
  originalSensor: any = {};
  sensor: any = {};
  isSaving: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public stationsProvider: StationsProvider
  ) {
    this.sensor = navParams.data.sensor;
    this.originalSensor = { ...this.sensor };
    this.station = navParams.data.station;
  }

  onChangeSensorStatus() {
    this.isSaving = true;

    this.stationsProvider.setSensorProperties(this.station.mac_address, this.sensor.type, {
      status: this.sensor.status === true ? 1 : 0
    }).subscribe(sensor => {
      this.isSaving = false;
    }, err => {
      this.sensor.active = this.originalSensor.active
      this.isSaving = false;
    });
  }

  onChangeSensorIntervals() {
    this.isSaving = true;

    this.stationsProvider.setSensorProperties(this.station.mac_address, this.sensor.type, {
      intervals: this.sensor.intervals
    }).subscribe(sensor => {
      this.isSaving = false;
    }, err => {
      this.sensor.intervals = this.originalSensor.intervals
      this.isSaving = false;
    });
  }

}
