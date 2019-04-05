import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsersPage} from "../users/users";
import {ApiClientProvider} from "../../providers/api-client/api-client";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  clientes: any = [{}];
  public cl = {id: "2"};

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiClient: ApiClientProvider) {
  }

  ionViewDidLoad() {
    let style = [
      {color: "blue"},
      {color: "yellow"},
      {color: "black"}
    ];
    this.apiClient.getClients(this.apiClient.CLIENTE_ID)
      .subscribe(
        res => {
          this.clientes = res;
          let count = this.clientes.length;
            let j = 0;
            for(var i = 0; i< count; i++){

              this.clientes[i].color = style[j].color;
              j++;
              if(j>=style.length)
              {
                j=0;
              }
            }
        },
        err => console.log(err)
      );
  }

  public GoUser(){
    this.navCtrl.push(UsersPage);
  }

}
