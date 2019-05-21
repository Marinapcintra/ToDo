import { HomePage } from './../home/home';

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
  myDate: String = new Date().toISOString();
  newsTitle: Date;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private modal: ModalController,
    public storage: Storage,
    public viewCtrl: ViewController,
  ) {

    this.newsTitle = new Date();
  }

  ionViewDidLoad(): void {
    this.storage.forEach((value: any, key: string) => {
      this.tasks.push(value);
    })
      .catch(this.handleError);
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


  openModal(description?: string, index?: number) {
    const myModal = this.modal.create(
      'ModalPage', 
      { description: description, index: index },
      { cssClass: 'teimosa' }
      );
    myModal.onDidDismiss((data) => {
      if (!data) return;

      const { description, index } = data;

      if (description && index === undefined) {
        const newTask: Task = {
          description: description,
          done: false,
          id: Math.random().toString().split('.')[1]
        };
  
        this.tasks.push(newTask);
        this.saveTask(newTask);
      } else if (index !== undefined) {
        this.tasks[index].description = description;
        this.saveTask(this.tasks[index]);
      }

    });
    myModal.present();

  }

  logout() {
    this.navCtrl.push('HomePage');
  }

}
