import { Component, OnInit } from '@angular/core';
import { Employee, Service } from 'app/app.service';
@Component({
  selector: 'app-multi-view',
  templateUrl: './multi-view.component.html',
  styleUrls: ['./multi-view.component.css']
})
export class MultiViewComponent implements OnInit {

  companies: Employee[];
  itemCount: number;

  constructor(service: Service) {
    this.companies = service. getEmployees();
    this.itemCount = this.companies.length;
  }
  ngOnInit() {
  }

}
