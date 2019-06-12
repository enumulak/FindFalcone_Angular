import { Vehicles } from './../models/vehicles.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { Planets } from '../models/planets.model';
import { map, catchError } from 'rxjs/operators';


const configUrl = 'https://findfalcone.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class FalconeService {

  constructor(private http: HttpClient) { }

  requestToken() {

    const httpHeaders = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.post(configUrl + '/token', { body: ''}, { headers: httpHeaders });
  }

  getAllPlanets(): Observable<Planets[]> {
    return this.http.get<Planets[]>(configUrl + '/planets').pipe(
    // tslint:disable-next-line: no-shadowed-variable
      map(data => data.map(data => new Planets().deserialize(data)))
    );
  }

  getAllVehicles(): Observable<Vehicles[]> {
    return this.http.get<Vehicles[]>(configUrl + '/vehicles').pipe(
    // tslint:disable-next-line: no-shadowed-variable
      map(data => data.map(data => new Vehicles().deserialize(data)))
    );
  }

  // Test Methods
  getPlanets() {
    return this.http.get(configUrl + '/planets');
  }
}
