import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';

import { Users } from './users';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  users: Users = new Users();

  @ViewChild('usuario') email;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  entrar(){
    let toast = this.toastCtrl.create({duration: 2000, position: 'bottom'})

    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
    .then(data=>{
      this.users.email = this.email.value;
      this.users.senha = this.senha.value;
      const alert = this.alertCtrl.create({
        title: 'Bem-vindo!',
        subTitle: 'Login realizado com sucesso!',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push('NewsPage');

    })
    .catch((error:any ) =>{
      if (error.code == 'auth/user-disabled') {
        toast.setMessage('O usuário digitado foi desabilitado');
      } else if (error.code == 'auth/user-not-found') {
        toast.setMessage('Usuário não encontrado');
      } else if (error.code == 'auth/invalid-email') {
        toast.setMessage('O email digitado é inválido');
      } else if (error.code == 'auth/wrong-password') {
        toast.setMessage('Senha incorreta');
      } 
      toast.present();
    });
  }

  registrar(){
    this.navCtrl.push('CadastroPage');
  }

}
