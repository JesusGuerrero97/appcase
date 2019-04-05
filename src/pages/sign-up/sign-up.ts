import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiRegistroProvider} from "../../providers/api-registro/api-registro";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  padre: any = [];
  cliente: any = [];
  login: any = {};
  registroPadre: any = {};
	

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private apiRegistro: ApiRegistroProvider) {
  }

  public registro()
  {
    this.registroPadre.password = this.login.password;
    
    this.apiRegistro.Agregar(this.padre)
    .subscribe(
      res => {
        this.login.id_padre= res;
        this.registroPadre.id_padre = this.login.id_padre;      
        this.agregar(this.registroPadre);
      },
      err => console.log(err)
    );
    this.login = {};
    this.padre = {};
    this.cliente = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  public agregar(padre : any)
  {
    this.apiRegistro.AgregarLogin(padre)
            .subscribe(
              res => {
                console.log(res);
              },
              err => console.log(err)
            );
  }

}
