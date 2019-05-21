import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token.model';
import { Planets } from '../models/planets.model';

@Injectable({
  providedIn: 'root'
})
export class FalconeService {

  configUrl = 'https://findfalcone.herokuapp.com';


  constructor(private http: HttpClient) { }

  getPlanets() {
    return this.http.get(this.configUrl + '/planets');
  }

  getVehicles() {
    return this.http.get(this.configUrl + '/vehicles');
  }

  requestToken() {

    const httpHeaders = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.post(this.configUrl + '/token', {headers: httpHeaders});
  }
}
