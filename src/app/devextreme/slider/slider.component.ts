import { Component, OnInit } from '@angular/core';
import { Service } from 'app/app.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

   dataSource: string[];
    slideshowDelay = 2000;
    constructor(service: Service) {
        this.dataSource = service.    getImages() ;
    }
    valueChanged(e) {
        this.slideshowDelay = e.value ? 2000 : 0;
    }

  ngOnInit() {
  }

}
