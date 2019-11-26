import { Component, OnInit, Input } from '@angular/core';
import { FalconeService } from '../../shared/services/falcone.service';

@Component({
  selector: 'app-planet-selector',
  templateUrl: './planet-selector.component.html',
  styleUrls: ['./planet-selector.component.css']
})
export class PlanetSelectorComponent implements OnInit {

  selectedPlanet;

  constructor(private service: FalconeService) { }

  ngOnInit() { }

  onPlanetSelection() {
    console.log(this.selectedPlanet);
  }

}
