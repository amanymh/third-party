import { Component, OnInit } from '@angular/core';
import { Employee, Service } from 'app/app.service';
@Component({
  selector: 'app-devtabs',
  templateUrl: './devtabs.component.html',
  styleUrls: ['./devtabs.component.css']
})
export class DevtabsComponent implements OnInit {

 employees: Employee[]
   
    tabContent: string;

    constructor(service: Service) {
        this.employees = service.getEmployees();
      
        this.tabContent = this.employees[0].Email;
    }
    selectTab(e) {
        this.tabContent = this.employees[e.itemIndex].Email;
    }

  ngOnInit() {
  }

}
