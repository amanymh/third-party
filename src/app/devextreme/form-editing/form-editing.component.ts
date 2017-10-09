import { Component, OnInit } from '@angular/core';

import { Service, Employee, State } from 'app/app.service';

@Component({
  selector: 'app-form-editing',
  templateUrl: './form-editing.component.html',
  styleUrls: ['./form-editing.component.css'],
   providers: [Service]
})
export class FormEditingComponent implements OnInit {

   dataSource: Employee[];
    states: State[];

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
    }
  ngOnInit() {
  }

}
