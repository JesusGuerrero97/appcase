import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {

    // (function(d){

      let tabs = Array.prototype.slice.apply(document.querySelectorAll('.nav-item'));
      let panels = Array.prototype.slice.apply(document.querySelectorAll('.tab-pane'));

      document.getElementById('nav-tab').addEventListener('click', e=>{

        const target = e.target as HTMLElement;

        if(target.classList.contains('nav-item')){
          let i = tabs.indexOf(e.target);

          tabs.map(tab => tab.classList.remove('active'));
          tabs[i].classList.add('active');

          panels.map(panels => panels.classList.remove('active'));
          panels.map(panels => panels.classList.remove('show'));
          panels[i].classList.add('active');
          panels[i].classList.add('show');
        }
      });

  // })(document);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }


}
