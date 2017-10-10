import { Component, OnInit } from '@angular/core';
import { Employee, Service } from 'app/app.service';

@Component({
  selector: 'app-column-resize',
  templateUrl: './column-resize.component.html',
  styleUrls: ['./column-resize.component.css'],
   providers: [Service]
})
export class ColumnResizeComponent implements OnInit {

  employees: Employee[];
    resizingModes: string[] = ["nextColumn", "widget"];
    columnResizingMode: string;

    constructor(service: Service) {
        this.employees =  service.getEmployees();
        this.columnResizingMode = this.resizingModes[0];
    }

    selectResizing(data) {
        this.columnResizingMode = data.value;
    }

  ngOnInit() {
  }

}
