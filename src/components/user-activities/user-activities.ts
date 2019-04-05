import { Component } from '@angular/core';
import {UserConfigurationPage} from "../../pages/user-configuration/user-configuration";
import {ProfilePage} from "../../pages/profile/profile";
import {NavController} from "ionic-angular";

import {ApiChartsProvider} from "../../providers/api-charts/api-charts";

import * as $ from "jquery";
import * as M from "materialize-css";
import {ApiClientProvider} from "../../providers/api-client/api-client";

declare var google;
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

  ID;
  cliente: any = {};
  text: string;
  cats: any;
  catGastos: any;
  stat = [
    ['Task', 'Hours per Day']
  ];

  constructor(public navCtrl: NavController, private apiClient: ApiClientProvider, public apiCharts: ApiChartsProvider) {
    this.ID = apiClient.ID;
  }

  public openConfig(){
    this.navCtrl.push(UserConfigurationPage);
  }
  public openProfile(){
    this.navCtrl.push(ProfilePage);
  }
  ngOnInit(){
    this.drawChart2();

    this.apiClient.getOneClient(this.ID)
      .subscribe(err=>{

        this.cliente = err;

      }, onErr=>{
        console.log(onErr)
      });
  }

  getStat(id){
    var clss = this;

    this.cats.forEach(function (item) {
      clss.apiCharts.getStadistic(id, item.id)
        .subscribe(
          res=>{
            // @ts-ignore
            clss.stat.push([item.descripcion, res.num])
            // {cat: item.descripcion, value: res.num}
          },
          err=>{
            console.log(err)
          }
        )

    });

    //meter gastos
    this.cats.forEach(function (item) {
      clss.apiCharts.getGastos(id)
        .subscribe(
          res=>{
            // @ts-ignore
            clss.catGastos = res;
            // {cat: item.descripcion, value: res.num}
          },
          err=>{
            console.log(err)
          }
        )

    });

    setTimeout(function () {
      clss.valueChart();

    },500)
  }

  drawChart2() {
    var clss = this;
    this.apiCharts.getCategorias()
  .subscribe(
      res => {
        this.cats = res;

        setTimeout(function () {
          clss.getStat(clss.ID);
        },150);

      },
      err => console.log(err)
    );
  }

  valueChart(){

    let datos = this.stat;

      var data = google.visualization.arrayToDataTable(datos);
      // var data = google.visualization.arrayToDataTable([
      //   ['Task', 'Hours per Day'],
      //   ['Work',     90],
      //   ['Eat',      10]
      // ]);

      var options = {
        title: 'Actividad general',
        legend:'right',
        pieHole: 0.4,
        backgroundColor: "#E4E4E4",
        is3D: false
      };

      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);

  }




}
