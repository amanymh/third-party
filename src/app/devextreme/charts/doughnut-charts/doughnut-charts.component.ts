import { Component, OnInit } from '@angular/core';




import { PopulationByRegion, Service } from 'app/app.service';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-doughnut-charts',
  templateUrl: './doughnut-charts.component.html',
  styleUrls: ['./doughnut-charts.component.css'],
   providers: [Service]
})
export class DoughnutChartsComponent implements OnInit {

   pipe: any = new PercentPipe("en-US");
    
    populationByRegions: PopulationByRegion[];

    constructor(service: Service) {
        this.populationByRegions = service.getPopulationByRegions();
    }

    customizeTooltip = (arg: any) => {
        return {
            text: arg.valueText + " - " + this.pipe.transform(arg.percent, "1.2-2")
        };
    }
  ngOnInit() {
  }

}
