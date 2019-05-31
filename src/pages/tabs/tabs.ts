import { Component, ViewChild } from '@angular/core';
import { Tabs, App} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef:Tabs;

  tab1Root = "NewsPage";
  tab2Root = "CalendarPage";
  tab3Root = "SettingsPage";
  public nav : any;

  constructor(public app: App) {
     this.nav = this.app.getActiveNav();
     let result = this.nav.getActive();
     console.log(result);
  }
}