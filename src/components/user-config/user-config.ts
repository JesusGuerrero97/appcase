import { Component } from '@angular/core';
import * as M from 'materialize-css';
import  * as  $ from 'jquery';
import {ApiConfigProvider} from "../../providers/api-config/api-config";
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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

  constructor(public navCtrl: NavController, private apiConfig: ApiConfigProvider) {
	
  }
  ngOnInit()
  {
    $(document).ready(function() {
      M.updateTextFields();
      $('#sw').prop('checked', true);
    });
    
    this.apiConfig.getPresupuesto(2)
	      .subscribe(
	        res => {
	          
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

      

