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
  Agregar(id: any) {
    return this.http.post(`${this.API_URI}/`, id);
    //return console.log(id);
  }

}
