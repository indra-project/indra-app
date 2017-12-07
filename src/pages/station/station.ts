import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SensorPage } from './../sensor/sensor';
import { HistoryPage } from './../history/history';

@IonicPage()
@Component({
  selector: 'page-station',
  templateUrl: 'station.html',
})
export class StationPage {

  station: any = {};
  sensorType = {
    "WATER_FLUX": "fluxo de água",
    "AIR_HUMIDITY": "umidade do ar",
    "SOIL_MOISTURE": "umidade do solo",
    "VIBRATION": "vibração",
    "FIRE_FLAME": "chamas",
    "TEMPERATURE": "temperatura",
    "PRESENCE_SENSOR": "presença",
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.station = navParams.data.station;
  }

  openSensor(sensor) {
    this.navCtrl.push(SensorPage, { sensor });
  }

  openHistory(station) {
    this.navCtrl.push(HistoryPage, { station });
  }

}
