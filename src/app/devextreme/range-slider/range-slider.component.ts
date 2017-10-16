import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {

  label: any;
    tooltip: any;
    tooltipEnabled: any;
  
    constructor() {
        this.label = {
            visible: true,
            format: (value) => {
                return this.format(value);
            },
            position: "top"
        };
        this.tooltip = {
            enabled: true,
            format: (value) => {
                return this.format(value);
            },
            showMode: "always", 
            position: "bottom"
        };
        this.tooltipEnabled = {
            enabled: true
        };
    }
  
    format(value){
        return value + "%";
    }

  ngOnInit() {
  }

}
