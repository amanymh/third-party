import { Component, OnInit } from '@angular/core';


import { Service, Employee } from 'app/app.service';
@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css'],
   providers: [Service]
})
export class ColumnsComponent implements OnInit {

  employees: Employee[];

    constructor(service: Service) {
        this.employees = service.getEmployees();
    }
    calculateCellValue(data) {
        return [data.Prefix, data.FirstName, data.LastName].join(" ");
    }
   calculateCellValue2(data) {
        return [ data.FirstName, data.BirthDate].join(" ");
    }
  ngOnInit() {
  }

}
