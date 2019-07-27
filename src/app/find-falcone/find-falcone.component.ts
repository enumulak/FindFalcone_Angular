import { Component, OnInit } from '@angular/core';
import { FalconeService } from '../shared/services/falcone.service';


@Component({
  selector: 'app-find-falcone',
  templateUrl: './find-falcone.component.html',
  styleUrls: ['./find-falcone.component.css']
})
export class FindFalconeComponent implements OnInit {

  selectedPlanet;
  selectedVehicle;

  constructor(private service: FalconeService) { }

  ngOnInit() {
  }

  onPlanetSelection() {
    this.service.getVehiclesForSelectedPlanet(this.selectedPlanet);
  }

  onVehicleSelection() {
    console.log(this.selectedVehicle);
  }
}
