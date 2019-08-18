import { Component, OnInit } from '@angular/core';
import { FalconeService } from '../shared/services/falcone.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service: FalconeService) { }

  ngOnInit() {
    this.service.sendFinalData();
  }

}
