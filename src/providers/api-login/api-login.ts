import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiLoginProvider {

  API_URI = 'http://192.168.137.1:3000';
  
  constructor(public http: HttpClient) {
    console.log('Hello ApiLoginProvider Provider');
  }
  ingresar(body: any) {
    console.log("entra va a la funcion del login");
    console.log(body);
    console.log(`${this.API_URI}/login`);
    return this.http.post(`${this.API_URI}/login`, body);
    //return console.log(id); 
  }

}
