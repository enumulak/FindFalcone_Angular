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
      console.log(this.vehicles);
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
