import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { stringify } from '@angular/core/src/render3/util';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  @ViewChild('usuario') email;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fire: AngularFireAuth,
    public toastCtrl: ToastController, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrar() {

    let toast = this.toastCtrl.create({ duration: 2000, position: 'bottom' });
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.senha.value)
      .then(data => {
        //chamar prox pag

        toast.setMessage('Usuário cadastrado com sucesso.');
        toast.present();
        this.navCtrl.setRoot('NewsPage');

      })
      .catch((error: any) => {
        //tratar erro
        if (error.code == 'auth/weak-password') {
          toast.setMessage('A senha digitada é muito fraca');
        } else if (error.code == 'auth/email-already-in-use') {
          toast.setMessage('O email digitado já está cadastrado');
        } else if (error.code == 'auth/invalid-email') {
          toast.setMessage('O email digitado é inválido');
        } else if (error.code == 'auth/operation-not-allowed') {
          toast.setMessage('A operação não foi autorizada');
        } 
        toast.present();
      });

  }


}
