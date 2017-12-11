import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-history-filter',
  templateUrl: 'history-filter.html',
})
export class HistoryFilterPage {

  filter: any = {};
  sensorOptions: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.filter = navParams.data.filter;
    this.sensorOptions = navParams.data.sensorOptions;
  }

  submitFilter(filter) {
    this.viewCtrl.dismiss(filter);
  }
}
