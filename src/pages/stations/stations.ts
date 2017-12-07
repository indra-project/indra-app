import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StationPage } from './../station/station';

@IonicPage()
@Component({
  selector: 'page-stations',
  templateUrl: 'stations.html',
})
export class StationsPage {

  type: 'all' | 'FIX' | 'MOB' = 'all';

  iconTypes = {
    'FIX': 'locate',
    'MOB': 'navigate',
  }

  stations = [{
    "id": 1,
    "name": "Estação Fixa",
    "description": "Estação meio do mato 1",
    "type": "FIX",
    "active": 0,
    "mac_address": "10:20:30:40:50:70",
    "created_at": "2017-11-28 00:46:41",
    "updated_at": "2017-11-28 00:46:41",
    "sensors": [
      {
        "id": 8,
        "name": "Fluxo de agua",
        "type": "WATER_FLUX",
        "station_id": 1,
        "active": 1,
        "intervals": 10,
        "unit": "L/s",
        "created_at": null,
        "updated_at": null,
        "value": 100
      },{
        "id": 10,
        "name": "Temperatura",
        "type": "TEMPERATURE",
        "station_id": 1,
        "active": 1,
        "intervals": 10,
        "unit": "° C",
        "created_at": null,
        "updated_at": null,
        "value": 32
      },
      {
        "id": 9,
        "name": "Umidade do ar",
        "type": "AIR_HUMIDITY",
        "station_id": 1,
        "active": 1,
        "intervals": 10,
        "unit": "%",
        "created_at": null,
        "updated_at": null,
        "value": 200
      },
    ]
  }, {
    "id": 2,
    "name": "Estação Móvel",
    "description": "Estação meio do mato 2",
    "type": "MOB",
    "active": 1,
    "mac_address": "10:20:30:40:50:80",
    "created_at": "2017-11-28 00:46:41",
    "updated_at": "2017-11-28 00:46:41",
    "sensors": [
      {
        "id": 8,
        "name": "Fluxo de agua",
        "type": "WATER_FLUX",
        "station_id": 1,
        "active": 1,
        "intervals": 10,
        "unit": "L/s",
        "created_at": null,
        "updated_at": null,
        "value": 100
      },
      {
        "id": 9,
        "name": "Umidade do ar",
        "type": "AIR_HUMIDITY",
        "station_id": 1,
        "active": 1,
        "intervals": 10,
        "unit": "%",
        "created_at": null,
        "updated_at": null,
        "value": 200
      },
    ]
  }];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  goToStation(station) {
    this.navCtrl.push(StationPage, { station })
  }

}
