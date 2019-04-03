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
	

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private apiRegistro: ApiRegistroProvider) {
  }

  public registro()
  {
    console.log(this.padre);
    this.apiRegistro.Agregar(this.padre)
	      .subscribe(
	        res => {	 
            
	        },
	        err => console.log(err)
	      );
    this.padre = {};

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
