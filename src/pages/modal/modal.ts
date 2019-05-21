import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public description: string;
  public index: number;

  public color: string = 'primary';
  public label: string = 'Add Label';

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              private modal: ModalController,
              public navParams: NavParams) {

    this.description = this.navParams.get('description');
    this.index = this.navParams.get('index');
  }

  addTask(): void {
    const data = {
      description: this.description,
      index: this.index
    }
    this.viewCtrl.dismiss(data);
  }

  addLabel() {
    const myModal = this.modal.create(
      'LabelPage',
      {}
    );
    myModal.onDidDismiss((teimosa) => {
      console.log(teimosa);
      this.color = teimosa.name;
      this.label = teimosa.description;

    });
    myModal.present();
  }
}
