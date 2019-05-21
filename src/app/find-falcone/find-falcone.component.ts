import { Component, OnInit } from '@angular/core';
import { FalconeService } from '../shared/services/falcone.service';
import { Planets } from '../shared/models/planets.model';

@Component({
  selector: 'app-find-falcone',
  templateUrl: './find-falcone.component.html',
  styleUrls: ['./find-falcone.component.css']
})
export class FindFalconeComponent implements OnInit {

  // Existing Data

  planets: any;
  token: any;
  vehicles: any;

  constructor(private service: FalconeService) { }

  ngOnInit() {
    this.getPlanets();
    this.getVehicles();
    this.getToken();
  }

  getPlanets() {
    this.service.getPlanets().subscribe(res => {
      this.planets = res;
    }, error => {
      console.log(error);
    });
  }

  getVehicles() {
    this.service.getVehicles().subscribe( res => {
      this.vehicles = res;
    }, error => {
      console.log(error);
    });
  }

  getToken() {
    this.service.getToken().subscribe( res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
