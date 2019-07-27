import { Final } from './../models/final.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {  Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const configUrl = 'https://findfalcone.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class FalconeService {

  planets: any = [];
  vehicles: any = [];
  vehiclesForSelectedPlanet: any = [];

  tokenObject: any;
  totalTimeTaken: number;

  finalResult: Final;

  constructor(private http: HttpClient) {

    this.totalTimeTaken = 0;
    this.finalResult = new Final();

    this.requestToken();
    this.getAllPlanets();
    this.getAllVehicles();
  }

  requestToken() {

    const httpHeaders = new HttpHeaders({
      'Accept': 'application/json'
    });

    this.http.post(configUrl + '/token', { body: ''}, { headers: httpHeaders }).subscribe(response => {
      this.tokenObject = response;
      this.finalResult.token = this.tokenObject.token;
      console.log(this.tokenObject.token);
    }, error => {
      console.log(error);
    });
  }

  // getPlanets(): Observable<Planets[]> {
  //   return this.http.get<Planets[]>(configUrl + '/planets')
  //     .pipe(catchError(this.handleError<Planets[]>('getPlanets', [])));
  // }

  // getVehicles(): Observable<Vehicles[]> {
  //   return this.http.get<Vehicles[]>(configUrl + '/vehicles')
  //     .pipe(catchError(this.handleError<Vehicles[]>('getVehicles', [])));
  // }


  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     // this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  getAllPlanets() {
    this.http.get(configUrl + '/planets').subscribe(result => {
      this.planets = result;
      console.log(this.planets);
    }, error => {
      console.log(error);
    });
  }

  getAllVehicles() {
    this.http.get(configUrl + '/vehicles').subscribe(result => {
      this.vehicles = result;
      console.log(this.vehicles);
    }, error => {
      console.log(error);
    });
  }

  getVehiclesForSelectedPlanet(planet) {

    // tslint:disable-next-line: prefer-const
    let temp = [];

    // tslint:disable-next-line: prefer-const
    for (let vehicle of this.vehicles) {
      if (planet.distance <= vehicle.max_distance) {
        temp.push(vehicle);
      }
    }

    this.vehiclesForSelectedPlanet = temp;
  }
}
