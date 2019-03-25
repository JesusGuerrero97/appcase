import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    this.text = 'Tab 3';
  }

}
