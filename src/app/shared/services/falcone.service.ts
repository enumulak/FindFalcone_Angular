import { ResponseData } from './../models/response-data';
import { SearchData } from './../models/search-data';
import { Vehicles } from './../models/vehicles.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Planets } from '../models/planets.model';

const configUrl = 'https://findfalcone.herokuapp.com';
const MAX_DATA = 4;

@Injectable({
  providedIn: 'root'
})
export class FalconeService {

  planets: Planets[] = [];
  vehicles: Vehicles[] = [];
  vehiclesForSelectedPlanet: any = [];

  tokenObject: any;
  finalResponseObject: any;
  totalTimeTaken: number;

  searchData: SearchData;
  finalResponse: ResponseData;
  readyToProcessData: boolean;

  planetsSelected: number;

  constructor(private http: HttpClient) {

    this.totalTimeTaken = 0;
    this.planetsSelected = 0;
    this.readyToProcessData = false;

    this.searchData = new SearchData();
    this.finalResponse = new ResponseData();

    this.requestToken();
    this.getAllPlanets();
    this.getAllVehicles();
  }

  /*********** WE FIRST GET A TOKEN *******************************************************************/
  requestToken() {

    const httpHeaders = new HttpHeaders({
      'Accept': 'application/json'
    });

    this.http.post(configUrl + '/token', { body: ''}, { headers: httpHeaders }).subscribe(response => {
      this.tokenObject = response;
      this.searchData.token = this.tokenObject.token;
      // console.log(this.tokenObject.token);
    }, error => {
      console.log(error);
    });
  }
  /***************************************************************************************************/



  /*********** REQUESTING DATA - PLANETS *************************************************************/
  getAllPlanets() {
    this.http.get<Planets[]>(configUrl + '/planets').subscribe(response => {
      this.planets = response;
      // tslint:disable-next-line: prefer-const
      for (let planet of this.planets) {
        planet.isSelected = false;
      }
      // console.log(this.planets);
      this.setPlanetsForDisplay();
    }, error => {
      console.log(error);
    });
  }
  /***************************************************************************************************/



  /*********** REQUESTING DATA - VEHICLES ************************************************************/
  getAllVehicles() {
    this.http.get<Vehicles[]>(configUrl + '/vehicles').subscribe(result => {
      this.vehicles = result;
      // console.log(this.vehicles);
    }, error => {
      console.log(error);
    });
  }
  /***************************************************************************************************/



  /*********** FUNCTION - RETURNS A LIST OF VEHICLES THAT CAN BE USED FOR SELECTED PLANET ************/
  getVehiclesForSelectedPlanet(planet) {

    // tslint:disable-next-line: prefer-const
    let temp = [];

    // tslint:disable-next-line: prefer-const
    for (let vehicle of this.vehicles) {
      if (planet.distance <= vehicle.max_distance) {
        if (vehicle.total_no >= 1) {
          temp.push(vehicle);
        }
      }
    }

    this.vehiclesForSelectedPlanet = temp;
  }
  /***************************************************************************************************/


  /*********** FUNCTION - DISABLES PLANET SELECTION IF IT ALREADY HAS BEEN SELECTED ******************/
  setPlanetsForDisplay() {

    // tslint:disable-next-line: prefer-const
    let temp = [];

    // tslint:disable-next-line: prefer-const
    for (let planet of this.planets) {
      if (!planet.isSelected) {
        temp.push(planet);
      }
    }

    this.planets = temp;
  }
  /***************************************************************************************************/


  /*********** CORE LOGIC OF APPLICATION *************************************************************/
  processSelectionsAndLogic(planet, vehicle) {

    planet.isSelected = true;
    vehicle.total_no -= 1;
    this.planetsSelected += 1;

    this.setPlanetsForDisplay();

    this.searchData.planet_names.push(planet.name);
    this.searchData.vehicle_names.push(vehicle.name);

    console.log(this.searchData);

    if (this.searchData.planet_names.length === MAX_DATA && this.searchData.vehicle_names.length === MAX_DATA) {
      this.readyToProcessData = true;
    }
  }
  /***************************************************************************************************/



  /*********** FUNCTION - SEND USER PROVIDED DATA TO BACKEND FOR PROCESSING AND GET THE RESULT *******/
  sendFinalData() {
    const httpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    this.http.post(configUrl + '/find', this.searchData, { headers: httpHeaders }).subscribe(response => {
      this.finalResponseObject = response;
      this.finalResponse.planet_name = this.finalResponseObject.planet_name;
      this.finalResponse.status = this.finalResponseObject.status;
      console.log(this.finalResponse);
    }, error => {
      console.log(error);
    });
  }
}
/***************************************************************************************************/
