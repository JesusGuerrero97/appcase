import { Component } from '@angular/core';

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

  constructor() {
    this.text = 'Tab 2';
  }

}
