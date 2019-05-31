import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Keyboard, ModalController, ToastController, ViewController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Task } from '../../models/task.models';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public keybord: Keyboard;
  public tasks: Task[] = [];
  public color: string = 'label'; 
  public showDate2: boolean = false;
  public showTime2: boolean = false;
  public New: boolean = false;
  public myDate: String = new Date().toISOString();
  public newsTitle: Date;
  public subtask: string = '';
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private modal: ModalController,
              public storage: Storage,
              public viewCtrl: ViewController,  ) {
    
    this.newsTitle = new Date();
  }

  ionViewDidLoad(): void {
        
  }

  deleteTask(index: number): void {
    this.storage.remove(this.tasks[index].id)
      .then(() => {
        this.tasks.splice(index, 1);
        this.presentToast('Item deletado!');
      })
      .catch(this.handleError);
  }

  markAsDone(task: Task): void {
    task.done = !task.done;
    this.saveTask(task); 
  }
  
  saveTask(task: Task): void {   
    this.storage.set(task.id, task)
      .then(() => {
        this.presentToast('Item salvo!');
      })
      .catch(this.handleError);
  }

  presentToast(message: string): void {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }

  handleError(error: any): void {
    this.presentToast('Ocorreu um erro! Por favor, tente mais tarde.');
    console.error(error);
  }


  openModal(task: Task, index?: number) {
    this.New = true;        
    const myModal = this.modal.create(
      'ModalPage', 
      {  lista: this.tasks, task: task,  index: index, showDate2: this.showDate2, showTime2: this.showTime2, New: this.New, subtask: this.subtask},
      { cssClass: 'teimosa' }
      );
    myModal.onDidDismiss((data) => {
      if (!data) return;
      
      const { description, index, color, date, hour, location, subtask } = data;

      if (description && index === undefined) {
        const newTask: Task = {
          description: description,
          color: color,
          date: date,
          hour: hour,
          location: location,
          done: false,
          subtask: subtask,
          id: Math.random().toString().split('.')[1]
        };
  
        this.tasks.push(newTask);
        this.saveTask(newTask);

      } else if (index !== undefined) {
        this.tasks[index].description = description;
        this.tasks[index].color = color;
        this.tasks[index].date = date;
        this.tasks[index].hour = hour;
        this.tasks[index].location = location;
        this.tasks[index].subtask = subtask;
        this.saveTask(this.tasks[index]);
      }

    });
    myModal.present();
  }

  editTask(task: Task, index: number): void { 
    this.showDate2 = true;
    this.showTime2 = true;
    this.New = false;    
    const myModal2 = this.modal.create(
      'ModalPage',
      { lista: this.tasks, task: task, description: task.description, index: index, showDate2: this.showDate2, showTime2: this.showTime2, New: this.New, subtask: this.subtask },
      { cssClass: 'teimosa' },
     
    );
    
    myModal2.onDidDismiss((data) => {
      if (!data) return;

      const { description, index, color, date, hour, location, subtask } = data;
      
      if (description && index === undefined) {
        const newTask: Task = {
          description: description,
          color: color,
          date: date,
          hour: hour,
          location: location,
          done: false,
          subtask: subtask,
          id: Math.random().toString().split('.')[1]
        };
        this.tasks.push(newTask);
        this.saveTask(newTask);

      } else if (index !== undefined) {
        this.tasks[index].description = description;
        this.tasks[index].color = color;
        this.tasks[index].date = date;
        this.tasks[index].hour = hour;
        this.tasks[index].location = location;
        this.tasks[index].subtask = subtask;
        this.saveTask(this.tasks[index]);
      }

    });
    myModal2.present();
  }

  

  logout() {
    this.navCtrl.push('HomePage');
  }

  
}
