import { Component, OnInit } from '@angular/core';
import { Service, Employee } from 'app/app.service';
@Component({
  selector: 'app-look-up',
  templateUrl: './look-up.component.html',
  styleUrls: ['./look-up.component.css']
})
export class LookUpComponent implements OnInit {

  employees: Employee[];
    selectedEmployee: any;

    constructor(service: Service) {
        this.employees = service.getEmployees();
    }

    valueChanged(data) {
        this.selectedEmployee = data.value;
    }

    getDisplayExpr(item) {
        if(!item) {
            return "";
        }

        return item.FirstName + " " + item.LastName;
    }
  ngOnInit() {
  }

}
