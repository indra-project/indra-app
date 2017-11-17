import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mobile-station',
  templateUrl: 'mobile-station.html',
})
export class MobileStationPage {

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
    console.log('ionViewDidLoad MobileStationPage');
  }

}
