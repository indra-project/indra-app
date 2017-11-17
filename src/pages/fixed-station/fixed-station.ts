import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fixed-station',
  templateUrl: 'fixed-station.html',
})
export class FixedStationPage {

  platform = {
    enabled: true,
    sensors: [
      { name: 'Temperature', value: '25 °C', enabled: true },
      { name: 'Humidity', value: '100', enabled: true },
      { name: 'UV', value: '1002.2', enabled: true },
    ]
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FixedStationPage');
  }

}
