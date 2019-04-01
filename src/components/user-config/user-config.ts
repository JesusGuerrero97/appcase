import { Component } from '@angular/core';
import * as M from 'materialize-css';
import  * as  $ from 'jquery';



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
      $('#sw').prop('checked', true);
    });
   
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

      

