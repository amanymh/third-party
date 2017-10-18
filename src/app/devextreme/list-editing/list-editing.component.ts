import { Component, OnInit } from '@angular/core';
import {City, Service } from 'app/app.service';

@Component({
  selector: 'app-list-editing',
  templateUrl: './list-editing.component.html',
  styleUrls: ['./list-editing.component.css']
})
export class ListEditingComponent implements OnInit {

   selectedItems: any[] = [];
    tasks: string[];

    constructor(service: Service) {
        this.tasks = service. getCountries();
    }

  ngOnInit() {
  }

}
