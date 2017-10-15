import { Component, OnInit } from '@angular/core';

import { Service ,Employee ,State} from 'app/app.service';

@Component({
  selector: 'app-sort-tabel',
  templateUrl: './sort-tabel.component.html',
  styleUrls: ['./sort-tabel.component.css'],
  providers: [Service]
})
export class SortTabelComponent implements OnInit {

  dataSource: Employee[];
 states: State[];
   
 events: Array<string> = [];
    constructor(service: Service)
 {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
    }

 
 ngOnInit() {
  }
 logEvent(eventName) {
        this.events.unshift(eventName);
    }
  
 
   clearEvents() {
        this.events = [];
    }


}
