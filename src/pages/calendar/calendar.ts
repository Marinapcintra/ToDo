import { Task } from './../../models/task.models';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ToastController } from 'ionic-angular';
import * as moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  public lista: Task[] = [];
  public description: string; 
  public myDate = new Date().toISOString();
  public myHour = new Date().toISOString(); 
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              public toastCtrl: ToastController,) {
  
  this.lista = this.navParams.get("tasks");
  const task: Task = this.navParams.get('task');
    if (task) {
      this.description = task.description;
      this.myHour = task.hour;
      this.myDate = task.date;    
    }
    console.log(task);
  }

  ionViewDidEnter() {

  }

  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}
