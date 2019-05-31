import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Task } from '../../models/task.models';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public description: string;  
  public color: string = 'label';
  public label: string = 'Add Label';
  public showLoc = false;
  public selectedLocation: string;
  public showDate: boolean;
  public showTime: boolean;
  public info: string;
  public lista: Task[] = [];
  public index: number;
  public New: boolean; 
  public myDate = new Date().toISOString();
  public myHour = new Date().toISOString();
  public subtask: string = '';

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              private modal: ModalController,
              public navParams: NavParams,
              public storage: Storage,) {

    this.showDate = this.navParams.get('showDate2');
    this.showTime = this.navParams.get('showTime2');
    this.lista = this.navParams.get("tasks");
    this.description = this.navParams.get("description");
    this.New = this.navParams.get('New');
    this.index = this.navParams.get('index');
    const task: Task = this.navParams.get('task');
    if (task) {
      this.description = task.description;
      this.selectedLocation = task.location;
      this.myHour = task.hour;
      this.myDate = task.date;
      this.color = task.color;
      this.subtask = task.subtask;      
    }
    
  }
  
  addTask(): void {
    const data = {
      description: this.description,
      color: this.color,
      date: this.myDate,
      hour: this.myHour,
      location: this.selectedLocation, 
      subtask: this.subtask,          
    }    
    this.viewCtrl.dismiss(data);  
  }

  editTask(): void{

    this.lista[this.index].description = this.description;
    this.lista[this.index].color = this.color;
    this.lista[this.index].date = this.myDate;
    this.lista[this.index].hour = this.myHour;
    this.lista[this.index].location = this.selectedLocation;
    this.lista[this.index].subtask = this.subtask;
   
    this.saveTask(this.lista[this.index]);
    this.viewCtrl.dismiss();
  }

  saveTask(lista: Task): void {
    this.storage.set(lista.id, lista);
  }

  addLabel() {
    const myModal = this.modal.create(
      'LabelPage',
      {}
    );
    myModal.onDidDismiss((teimosa) => {      
      this.color = teimosa.name;
      this.label = teimosa.colorDescription; 
    });
    myModal.present();
  }

  getAddress(address) {
    this.selectedLocation = address.formatted_address;
    this.showLoc = false;
  }

  setDate():void {
      this.showDate = !this.showDate;     
  }

  setTime():void {
      this.showTime = !this.showTime;
  }


}
