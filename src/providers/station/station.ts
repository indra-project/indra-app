import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class StationsProvider {

  constructor(
    public http: Http
  ) { }

  private stationSubject = new BehaviorSubject<any[]>([]);

  getStations() {

    setTimeout(() => {
      this.stationSubject.next(STATIONS_CACHE);
    });

    return this.stationSubject;
  }

  getHistory(station_id) {
    return new Observable<any[]>(observer => {
      setTimeout(() => {
        observer.next(HISTORY_CACHE);
      });
    });
  }
}

const STATIONS_CACHE = [
  {
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
      }, {
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
  }
];

const HISTORY_CACHE = [
  {
    "id": 8,
    "name": "Fluxo de agua",
    "type": "WATER_FLUX",
    "station_id": 1,
    "active": 1,
    "intervals": 10,
    "unit": "L/s",
    "data": [
      {
        "value": "12",
        "date": "2017-12-05 10:00:00",
        "altitude": "1000",
        "latitude": "-49",
        "longitude": "-18"
      },
      {
        "value": "12",
        "date": "2017-12-05 10:00:00",
        "altitude": "1000",
        "latitude": "-49",
        "longitude": "-18"
      },
      {
        "value": "12",
        "date": "2017-12-05 10:00:00",
        "altitude": "1000",
        "latitude": "-49",
        "longitude": "-18"
      },
      {
        "value": "12",
        "date": "2017-12-05 10:00:00",
        "altitude": "1000",
        "latitude": "-49",
        "longitude": "-18"
      },
    ]
  },
  {
    "id": 9,
    "name": "umidade do ar",
    "type": "AIR_HUMIDITY",
    "station_id": 1,
    "active": 1,
    "intervals": 10,
    "unit": "%",
    "data": [
      {
        "value": "12",
        "date": "2017-12-05 10:00:00",
        "altitude": "1000",
        "latitude": "-49",
        "longitude": "-18"
      },
      {
        "value": "12",
        "date": "2017-12-05 10:00:00",
        "altitude": "1000",
        "latitude": "-49",
        "longitude": "-18"
      },
      {
        "value": "12",
        "date": "2017-12-05 10:00:00",
        "altitude": "1000",
        "latitude": "-49",
        "longitude": "-18"
      },
      {
        "value": "12",
        "date": "2017-12-05 10:00:00",
        "altitude": "1000",
        "latitude": "-49",
        "longitude": "-18"
      },
    ]
  }
];