import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as M from 'materialize-css';
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

  ngOnInit()
  {
    $(document).ready(function() {
      M.updateTextFields();
    });
  }

}

      

