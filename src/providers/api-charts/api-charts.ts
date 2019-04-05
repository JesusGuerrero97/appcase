import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiChartsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiChartsProvider {

  API_URI = 'http://localhost:3000';

  constructor(public http: HttpClient) {}

  getCategorias() {
    return this.http.get(`${this.API_URI}/categorias/get`);
  }
  getStadistic(id, id_cli){
    return this.http.get(`${this.API_URI}/categorias/get/${id}/cli/${id_cli}`);
  }

}
