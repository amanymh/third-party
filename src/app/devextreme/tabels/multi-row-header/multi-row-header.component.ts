import { Component, OnInit } from '@angular/core';
import { Service, Employee } from 'app/app.service';

@Component({
  selector: 'app-multi-row-header',
  templateUrl: './multi-row-header.component.html',
  styleUrls: ['./multi-row-header.component.css'],
   providers: [Service]
})
export class MultiRowHeaderComponent implements OnInit {

 employees: Employee[];

    constructor(service: Service) {
        this.employees = service.getEmployees();
    }

  ngOnInit() {
  }

}
