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
	fecha: any = [{}];
	constructor(public navCtrl: NavController, private apiClient: ApiClientProvider) {
	
  }

  ngOnInit(){
	  	this.apiClient.getOneClient(this.apiClient.ID)
	      .subscribe(
	        res => {
						this.cliente = res;
						console.log(this.cliente.fecha_nac);	
	          this.apiClient.getOnePadecimiento(this.cliente.id_cliente)
			      .subscribe(
			        res => {
								this.pad = res;		
								//this.pad.nombre
			          console.log(res);
			        },
			        err => console.log(err)
			      );
	        },
	        err => console.log(err)
	      );
	}

	

  

}
