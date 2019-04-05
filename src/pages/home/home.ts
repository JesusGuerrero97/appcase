import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import { SignUpPage } from '../sign-up/sign-up';
import { ApiLoginProvider } from '../../providers/api-login/api-login';
import * as M from 'materialize-css';
import { ApiClientProvider } from '../../providers/api-client/api-client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  login: any = {};

  constructor(public navCtrl: NavController, private ApiLogin: ApiLoginProvider, private Apiclient: ApiClientProvider) {
      
  }
 
  public entrar()
  {
    this.ApiLogin.ingresar(this.login)
    .subscribe(
      res => {
            if(res){
              this.Apiclient.CLIENTE_ID = res
              this.navCtrl.push(LoginPage);
            }else{
              //alert("no existe usuario alv");
              M.toast({html:'No existe usuario'})
            }
        console.log(res);
      },
      err => console.log(err)
    );
    //this.navCtrl.push(LoginPage);
  }

  public abrir()
  {
    this.navCtrl.push(SignUpPage);
  }
}

