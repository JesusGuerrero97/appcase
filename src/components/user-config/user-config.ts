import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as M from 'materialize-css';
import {ApiConfigProvider} from "../../providers/api-config/api-config";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { shiftInitState } from '@angular/core/src/view';



/**
 * Generated class for the UserConfigComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-config',
  templateUrl: 'user-config.html'
})
export class UserConfigComponent {

  cliente: any = {};
	productos: any = [{}];
  constructor(public navCtrl: NavController, private apiConfig: ApiConfigProvider) {
	
  }

  ngOnInit()
  {
    $(document).ready(function() {
      M.updateTextFields();
      $('#sw').prop('checked', true);
    });

    this.apiConfig.getClientes({id: 2})
	      .subscribe( 
	        res => {
            this.cliente= res[0];
            console.log(this.cliente.presupuesto);
            $(function(){
              M.updateTextFields();
            });
	        },
	        err => console.log(err)
        );
  
    this.apiConfig.getProductos({id: 2})
    .subscribe( 
      res => {
        this.productos= res;
        console.log(this.productos);
      },
      err => console.log(err)
    );
  }

  tab=[true,false,false,false];
  
  public tabs(num:any)
  {
    for(let i=0;i<=3;i++)
    {
      this.tab[i]=false;
    }
    this.tab[num]=true;

  }

}

      

