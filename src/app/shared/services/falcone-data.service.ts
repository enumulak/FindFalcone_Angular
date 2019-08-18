import { Observable } from 'rxjs';
import { Vehicles } from './../models/vehicles.model';
import { Planets } from './../models/planets.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FalconeDataService {

  private readonly CONFIG_URL = 'https://findfalcone.herokuapp.com';

  private planets: Planets[] = [];
  private vehicles: Vehicles[] = [];

  constructor(private http: HttpClient) { }

  getAllPlanets() {
    this.http.get<Planets[]>(this.CONFIG_URL + '/planets').subscribe(response => {
      this.planets = response;
    }, error => {
      console.log(error);
    });
  }
}
