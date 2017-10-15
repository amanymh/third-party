import { Component, OnInit } from '@angular/core';
import { Employee, Service } from 'app/app.service';
@Component({
  selector: 'app-master-detail-tabel',
  templateUrl: './master-detail-tabel.component.html',
  styleUrls: ['./master-detail-tabel.component.css'],
   providers: [Service]
})
export class MasterDetailTabelComponent implements OnInit {

  dataSource: any;

    constructor(private service: Service) {
        this.dataSource = {
            store: {
                type: 'array',
                key: 'ID',
                data: this.service.getEmployees()
            }
        }
    }

    completedValue(rowData) {
        return rowData.Status == "Completed";
    }
  ngOnInit() {
  }

}
