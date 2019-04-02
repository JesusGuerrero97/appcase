import { Component } from '@angular/core';
import {UserConfigurationPage} from "../../pages/user-configuration/user-configuration";
import {ProfilePage} from "../../pages/profile/profile";
import {NavController, NavParams} from "ionic-angular";

/**
 * Generated class for the UserActivitiesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-activities',
  templateUrl: 'user-activities.html'
})
export class UserActivitiesComponent {

  text: string;

  constructor(public navCtrl: NavController) {
  }

  public openConfig(){
    this.navCtrl.push(UserConfigurationPage);
  }
  public openProfile(){
    this.navCtrl.push(ProfilePage);
  }


}
