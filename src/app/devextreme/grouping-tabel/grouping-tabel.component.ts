import { Component, OnInit } from '@angular/core';



import { Service, Employee  } from 'app/app.service';

@Component({
  selector: 'app-grouping-tabel',
  templateUrl: './grouping-tabel.component.html',
  styleUrls: ['./grouping-tabel.component.css'],
   providers: [Service]
})
export class GroupingTabelComponent implements OnInit {

    dataSource: Employee[];

    constructor(service: Service) {
      
         this.dataSource = service.getEmployees();
    }

  ngOnInit() {
  }

}
