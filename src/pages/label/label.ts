import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-label',
  templateUrl: 'label.html',
})
export class LabelPage {


  colorList = [
    { name: 'danger', color: '#f53d3d', description: 'High Priority' },
    { name: 'low-priority', color: '#f07233', description: 'Low Priority' },
    { name: 'in-review', color: '#ffbf00', description: 'In Review' },
    { name: 'on-hold', color: '#ffec5a', description: 'On Hold' },
    { name: 'work', color: '#00eb5a', description: 'Work' },
    { name: 'home', color: '#03a54c', description: 'Home' },
    { name: 'study', color: '#6699ff', description: 'Study' },
    { name: 'personal', color: '#5454eb', description: 'Personal' },
  ]

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  showColor(c, i) {
    console.log(i, "entrou");
    this.viewCtrl.dismiss(this.colorList[i]);
  }


}
