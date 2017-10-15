import { Component, OnInit } from '@angular/core';
import { Service, Employee } from 'app/app.service';
@Component({
  selector: 'app-right-left-tabel',
  templateUrl: './right-left-tabel.component.html',
  styleUrls: ['./right-left-tabel.component.css'],
   providers: [Service]
})
export class RightLeftTabelComponent implements OnInit {
 employees: Employee[];
    placeholder = "Search...";
    rtlEnabled = true;
    languages: string[] = ["Arabic (Right-to-Left direction)", "English (Left-to-Right direction)"];

    constructor(service: Service) {
        this.employees = service. getEmployees();
    }
    selectLanguage(data) {
        this.rtlEnabled = data.value === this.languages[0];
        this.placeholder = this.rtlEnabled ? 'بحث' : 'Search...';
    }

  ngOnInit() {
  }

}
