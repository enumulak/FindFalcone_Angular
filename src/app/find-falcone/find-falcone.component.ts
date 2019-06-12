import { Component, OnInit } from '@angular/core';
import { FalconeService } from '../shared/services/falcone.service';
import { Final } from '../shared/models/final.model';
import { Planets } from '../shared/models/planets.model';
import { Vehicles } from '../shared/models/vehicles.model';


@Component({
  selector: 'app-find-falcone',
  templateUrl: './find-falcone.component.html',
  styleUrls: ['./find-falcone.component.css']
})
export class FindFalconeComponent implements OnInit {

  // Required Data
  tokenObject: any;
  // public planets: Planets[];
  public vehicles: Vehicles[];
  planets: any;

  // Final Data that will be sent to Back-End
  finalResult: Final;

  // Helper Variables
  currentIteration: number;
  totalTimeTaken: number;

  constructor(private service: FalconeService) { }

  ngOnInit() {

    // Initialize Helper Variables
    this.finalResult = new Final();
    this.currentIteration = 0;
    this.totalTimeTaken = 0;

    // Get required Data from the Back-End
    this.getToken();
    // this.getPlanets();
    // this.getVehicles();
    this.getAllPlanets();
  }

  getToken() {
    this.service.requestToken().subscribe( res => {
      this.tokenObject = res;
      this.finalResult.token = this.tokenObject.token;
      console.log(this.finalResult);
      }, err => {
      console.log(err);
    });
  }

  // getPlanets() {
  //   this.service.getAllPlanets().subscribe(planets => this.planets = planets);
  // }

  // getVehicles() {
  //   this.service.getAllVehicles().subscribe(vehicles => this.vehicles = vehicles);
  // }

  getAllPlanets() {
    this.service.getPlanets().subscribe( res => {
      this.planets = res;
      this.finalResult.planet_names.push(this.planets[0].name);
      console.log(this.planets[0].name);
    }, err => {
      console.log(err);
    });
  }
}
