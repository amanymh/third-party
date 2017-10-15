import { Component, OnInit } from '@angular/core';

import { Employee, Service } from 'app/app.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

 employees: Employee[];

    constructor(service: Service) {
        this.employees = service. getEmployees();
    }

  ngOnInit() {
  }

}
