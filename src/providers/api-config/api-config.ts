import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiConfigProvider {

  API_URI = 'http://localhost:3000';

  constructor(public http: HttpClient) {
  }

  getClientes(id: any) {
    return this.http.post(`${this.API_URI}/config/`, id);
  }

  getProductos()
  {
    return this.http.get(`${this.API_URI}/config/pr`);
  }

  getBloqueados(id_cliente:any)
  {
    return this.http.post(`${this.API_URI}/config/block`,id_cliente);
  }

  updateBlock(array_block:any)
  {
    return this.http.post(`${this.API_URI}/config/bloquear`,array_block);
  }

  updatePresupuesto(cliente:any)
  {
    return this.http.put(`${this.API_URI}/config/updatePresupuesto`,cliente);
  }

}
