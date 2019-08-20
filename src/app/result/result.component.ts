import { Component, OnInit } from '@angular/core';
import { FalconeService } from '../shared/services/falcone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service: FalconeService, private route: Router) { }

  ngOnInit() {
    this.service.sendFinalData();
  }

  restart() {
    setTimeout(() => {
      this.route.navigateByUrl('', { skipLocationChange: false}).then(() =>
      this.route.navigate(['/start']));
    }, 500);
  }

}
