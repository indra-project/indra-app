import { Component } from '@angular/core';

import { FixedStationPage } from '../fixed-station/fixed-station';
import { MobileStationPage } from '../mobile-station/mobile-station';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabFixed = FixedStationPage;
  tabMobile = MobileStationPage;
  tabAbout = AboutPage;

  constructor() {

  }
}
