import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';

import { Service, Employee, State } from 'app/app.service';

@Component({
  selector: 'app-bath-editing',
  templateUrl: './bath-editing.component.html',
  styleUrls: ['./bath-editing.component.css'],
   providers: [Service]
})
export class BathEditingComponent implements OnInit {

   dataSource: Employee[];
    states: State[];

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
    }

  ngOnInit() {
  }

}
