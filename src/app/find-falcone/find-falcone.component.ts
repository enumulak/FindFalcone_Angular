import { Component, OnInit } from '@angular/core';
import { FalconeService } from '../shared/services/falcone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-falcone',
  templateUrl: './find-falcone.component.html',
  styleUrls: ['./find-falcone.component.css']
})
export class FindFalconeComponent implements OnInit {

  selectedPlanet;
  selectedVehicle;
  availablePlanets;

  constructor(private service: FalconeService, private route: Router) { }

  ngOnInit() {
    console.log(this.service.planets);
  }

  onPlanetSelection() {

    this.service.getVehiclesForSelectedPlanet(this.selectedPlanet);

  }

  submitData() {

    this.service.processSelectionsAndLogic(this.selectedPlanet, this.selectedVehicle);

    if (!this.service.readyToProcessData) {
      setTimeout(() => {
        this.route.navigateByUrl('', { skipLocationChange: false}).then(() =>
        this.route.navigate(['/findfalcone']));
      }, 500);
    } else {
      this.route.navigate(['/result']);
    }
  }
}
