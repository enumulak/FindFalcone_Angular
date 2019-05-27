import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token.model';
import { Planets } from '../models/planets.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

    return this.http.post(this.configUrl + '/token', { body: ''}, { headers: httpHeaders });
  }

  getAllPlanets(): Observable<Planets[]> {
    return this.http.get<Planets[]>(this.configUrl + '/planets').pipe(
      // tslint:disable-next-line:no-shadowed-variable
      map(data => data.map(data => new Planets().deserialize(data)))
    );
  }
}
