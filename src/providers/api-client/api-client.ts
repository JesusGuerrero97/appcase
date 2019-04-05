import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ApiClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiClientProvider {

  API_URI = 'http://localhost:3000';
  CLIENTE_ID = null;

  constructor(public http: HttpClient) {
  }

  getClients(id: any) {
    return this.http.post(`${this.API_URI}/`, id);
  }
  getOneClient(id: any){
    return this.http.get(`${this.API_URI}/${id}`);
  }
  getOnePadecimiento(id: any){
    return this.http.get(`${this.API_URI}/padi/${id}`);
  }
}
