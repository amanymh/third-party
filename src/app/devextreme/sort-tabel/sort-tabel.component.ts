import { Component, OnInit } from '@angular/core';

import { Service ,Company } from 'app/app.service';

@Component({
  selector: 'app-sort-tabel',
  templateUrl: './sort-tabel.component.html',
  styleUrls: ['./sort-tabel.component.css'],
  providers: [Service]
})
export class SortTabelComponent implements OnInit {

  dataSource: Company[];

    constructor(service: Service) {
        this.dataSource = service.getCompanies();
    }
  ngOnInit() {
  }

}
