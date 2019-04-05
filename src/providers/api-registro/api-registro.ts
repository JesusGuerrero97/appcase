import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiRegistroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiRegistroProvider {

  API_URI = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('Hello ApiRegistroProvider Provider');

  }
  Agregar(body: any) {
    console.log("entra ala funcione agregar papa");
    //console.log(body);
    console.log(`${this.API_URI}/registro`);
    return this.http.post(`${this.API_URI}/registro`, body);
    //return console.log(id); 
  }
  AgregarLogin(body: any) {
    console.log("entra ala funcion dl login");
    console.log(body);
    console.log(`${this.API_URI}/registro/login`);
    return this.http.post(`${this.API_URI}/registro/login`, body);
    //return console.log(id); 
  }

}
