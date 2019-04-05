import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiConfigProvider {

  API_URI = 'http://192.168.137.1:3000';

  constructor(public http: HttpClient) {
  }

  getClientes(id: any) {
    return this.http.post(`${this.API_URI}/config/`, id);
  }

  getProductos(id:any)
  {
    return this.http.post(`${this.API_URI}/config/pr`, id);
  }

}
