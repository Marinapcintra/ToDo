import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-label',
  templateUrl: 'label.html',
})
export class LabelPage {


  colorList = [
    { name: 'danger', color: '#f53d3d', colorDescription: 'High Priority' },
    { name: 'low-priority', color: '#f07233', colorDescription: 'Low Priority' },
    { name: 'in-review', color: '#ffbf00', colorDescription: 'In Review' },
    { name: 'on-hold', color: '#ffec5a', colorDescription: 'On Hold' },
    { name: 'work', color: '#00eb5a', colorDescription: 'Work' },
    { name: 'home', color: '#03a54c', colorDescription: 'Home' },
    { name: 'study', color: '#6699ff', colorDescription: 'Study' },
    { name: 'personal', color: '#5454eb', colorDescription: 'Personal' },
  ]

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  showColor(c, i) {
    
    this.viewCtrl.dismiss(this.colorList[i]);
  }


}
