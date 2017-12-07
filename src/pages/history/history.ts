import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  station = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.station = navParams.data.station;
  }

}