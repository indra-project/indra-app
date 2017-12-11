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
    startDate.setHours(0, 0, 0, 0);
    startDate = startDate.toISOString();

    let endDate: any = new Date;
    endDate.setHours(23, 59, 59, 999);
    endDate = endDate.toISOString();

    let sensor = allSensors.id;
    this.filter = { startDate, endDate, sensor };

    this.loadData();
  }

  loadData() {
    this.stationsProvider.getHistory(this.station.mac_address, this.filter)
      .subscribe(history => {
        this.history = history;
        this.sensorOptions = [allSensors, ...history];
      });
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
}

