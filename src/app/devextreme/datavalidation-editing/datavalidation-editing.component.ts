import { Component, OnInit } from '@angular/core';


import { Service, Employee } from 'app/app.service';

@Component({
  selector: 'app-datavalidation-editing',
  templateUrl: './datavalidation-editing.component.html',
  styleUrls: ['./datavalidation-editing.component.css'],
  providers: [Service]
})
export class DatavalidationEditingComponent implements OnInit {

 dataSource: Employee[];
    pattern: any = /^\(\d{3}\)\ \d{3}-\d{4}$/i;

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
    }

  ngOnInit() {
  }

}
