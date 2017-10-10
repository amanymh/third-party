import { Component, OnInit } from '@angular/core';
import { Service, Employee } from 'app/app.service';
@Component({
  selector: 'app-apperance',
  templateUrl: './apperance.component.html',
  styleUrls: ['./apperance.component.css'],
  providers: [Service]
})
export class ApperanceComponent implements OnInit {

 employees: Employee[];

    constructor(service: Service) {
        this.employees = service.getEmployees();
    }

  ngOnInit() {
  }

}
