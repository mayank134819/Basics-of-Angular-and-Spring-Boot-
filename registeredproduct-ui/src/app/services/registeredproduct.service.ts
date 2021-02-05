import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisteredproductService {

  constructor(private http:HttpClient) { 

  }

  getAllRPs() {
    return this.http.get('/server/api/v1/registeredproducts');
  }

  getRP(id: number){
    return this.http.get('server/api/v1/registeredproducts/' + id);
  }

  createRegisteredProduct(registeredproduct) {
    let body = JSON.stringify(registeredproduct);
    return this.http.post('/server/api/v1/registeredproducts', body, httpOptions);
  }


}
