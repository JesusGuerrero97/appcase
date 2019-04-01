import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ApiClientProvider} from "../../providers/api-client/api-client";


/**
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html',
  
})

export class UserProfileComponent {

	cliente: any = [{}];
	pad: any = [{}];
  constructor(public navCtrl: NavController, private apiClient: ApiClientProvider) {
	
  }

  ngOnInit(){
	  	this.apiClient.getOneClient(2)
	      .subscribe(
	        res => {
	          this.cliente = res;
	          console.log(this.cliente);
	          this.apiClient.getOnePadecimiento(this.cliente.id_cliente)
			      .subscribe(
			        res => {
			          this.pad = res;
			          console.log(res);

			        },
			        err => console.log(err)
			      );
			
	         

	        },
	        err => console.log(err)
	      );
	}

	

  

}
