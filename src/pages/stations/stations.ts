import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StationPage } from './../station/station';
import { StationsProvider } from './../../providers/station/station';

@IonicPage()
@Component({
  selector: 'page-stations',
  templateUrl: 'stations.html',
})
export class StationsPage {

  type: '*' | 'FIX' | 'MOB' = '*';

  iconTypes = {
    'FIX': 'locate',
    'MOB': 'navigate',
  }

  stations = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public stationsProvider: StationsProvider
  ) { }

  ionViewDidLoad() {
    this.loadStations();
  }

  loadStations() {
    let observable = this.stationsProvider.getStations()

    observable.subscribe(stations => {
      this.stations = stations;
    });

    return observable;
  }

  onRefresh(refresher) {
    this.loadStations().subscribe(stations => {
      setTimeout(() => { refresher.complete(); }, 1000);
    });
  }

  goToStation(station) {
    this.navCtrl.push(StationPage, { station })
  }

}
