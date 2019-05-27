import { Component, OnInit } from '@angular/core';
import { FalconeService } from '../shared/services/falcone.service';
import { Final } from '../shared/models/final.model';

@Component({
  selector: 'app-find-falcone',
  templateUrl: './find-falcone.component.html',
  styleUrls: ['./find-falcone.component.css']
})
export class FindFalconeComponent implements OnInit {

  // Required Data
  planets: any;
  tokenObject: any;
  vehicles: any;

  finalResult: Final;

  // Helper Variables
  currentIteration: number;
  totalTimeTaken: number;

  constructor(private service: FalconeService) { }

  ngOnInit() {
    this.finalResult = new Final();
    this.currentIteration = 0;
    this.totalTimeTaken = 0;
    this.getData();
  }

  getData() {

    // Get Planet Data
    this.service.getPlanets().subscribe( res => {
      this.planets = res;
      }, error => {
        console.log(error);
    });

    // Get Vehicle Data
    this.service.getVehicles().subscribe( res => {
      this.vehicles = res;
    }, error => {
      console.log(error);
    });

    // Get and Set the Application Token
    this.service.requestToken().subscribe( res => {
      this.tokenObject = res;
      this.finalResult.token = this.tokenObject.token;
      console.log(this.finalResult);
    }, error => {
      console.log(error);
    });
  }
}
