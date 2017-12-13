import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { StationsProvider } from './../../providers/station/station';
import { HistoryFilterPage } from './../history-filter/history-filter';

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
    public stationsProvider: StationsProvider,
    public modalCtrl: ModalController
  ) {
    this.station = navParams.data.station;

    let startDate: any = new Date();

    startDate.setDate(startDate.getDate() - 7);
    startDate.setHours(0, 0, 0, 0);
    startDate = startDate.toISOString();

    let endDate: any = new Date();
    endDate.setHours(23, 59, 59, 999);
    endDate = endDate.toISOString();

    let sensor = allSensors.id;
    this.filter = { startDate, endDate, sensor };

    this.loadData();
  }

  lineChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'linear'
      }]
    }
  };

  loadData() {
    this.stationsProvider.getHistory(this.station.mac_address, this.filter)
      .subscribe(history => {
        this.history = history.map(x => {
          x.mode = 'chart';

          return x;
        });
        this.sensorOptions = [allSensors, ...history];
      });
  }

  getDatasets(sensor) {
    return [{
      label: `${sensor.name} [${sensor.unit}]`,
      data: sensor.data.map((data, i) => {
        return {
          t: new Date(data.date),
          y: Number(data.value)
        };
        // random number mocking
        /*return {
          t: new Date(2017, 12, i, i, Math.floor(Math.random() * 60), Math.floor(Math.random() * 60), 0),
          y: Number(data.value) + (Math.random() * 10)
        };
        */
      })
    }];
  }

  openFilterHistory() {

    let { sensorOptions, filter } = this;

    let modal = this.modalCtrl.create(HistoryFilterPage, { filter, sensorOptions });

    modal.onWillDismiss(filter => {
      this.filter = filter;
      this.loadData()
    });

    modal.present();
  }

  getChartData(datas) {
    return datas.map(data => {
      return { x: new Date(data.date), y: data.value };
    })
  }
}

