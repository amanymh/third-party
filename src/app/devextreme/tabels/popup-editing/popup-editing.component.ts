import { Component, OnInit } from '@angular/core';

import { Service, Employee, State } from 'app/app.service';

@Component({
  selector: 'app-popup-editing',
  templateUrl: './popup-editing.component.html',
  styleUrls: ['./popup-editing.component.css'],
  providers: [Service]
})
export class PopupEditingComponent implements OnInit {

  dataSource: Employee[];
    states: State[];

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
    }
  ngOnInit() {
  }

}
