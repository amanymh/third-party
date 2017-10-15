import { Component, OnInit } from '@angular/core';
import { Data, Service } from 'app/app.service';


@Component({

  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css'],
     providers: [Service]
})
export class BarChartsComponent implements OnInit {

   dataSource: Data[];

    constructor(service: Service) {
        this.dataSource = service.getData();
    }

  ngOnInit() {
  }

}
