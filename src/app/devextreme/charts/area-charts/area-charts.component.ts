import { Component, OnInit } from '@angular/core';




import { Service, Population } from 'app/app.service';


@Component({
  selector: 'app-area-charts',
  templateUrl: './area-charts.component.html',
  styleUrls: ['./area-charts.component.css'],
    providers: [Service]
})
export class AreaChartsComponent implements OnInit {

  populationData: Population[];
    types: string[] = ["area", "stackedarea", "fullstackedarea"];
    format = "millions";

    constructor(service: Service) {
        this.populationData = service.getPopulationData();
    }
    onValueChanged(e) {
        this.format = e.value === this.types[2] ? "percent" : "millions";
    }

  ngOnInit() {
  }

}
