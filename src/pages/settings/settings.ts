import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  settingsList = [
    { name: 'person', Description: 'Profile' },
    { name: 'lock',  Description: 'Change Password' },
    { name: 'at',  Description: 'Invite Friends' },
    { name: 'finger-print',  Description: 'Secutiry' },
    { name: 'notifications-off', Description: 'Event Reminders' },
    { name: 'build', Description: 'Support' },
    { name: 'checkmark-circle-outline', Description: 'Permissions' },
    { name: 'information-circle', Description: 'About' },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
