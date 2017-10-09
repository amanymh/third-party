import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';

import { DxDataGridModule, DxDataGridComponent,} from 'devextreme-angular';
import { Service, Employee, State } from 'app/app.service';
import ArrayStore from 'devextreme/data/array_store'

@Component({
  selector: 'app-cell-editing',
  templateUrl: './cell-editing.component.html',
  styleUrls: ['./cell-editing.component.css'],
   providers: [Service]

})
export class CellEditingComponent implements OnInit {

   @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

    dataSource: ArrayStore;
    states: State[];
    selectedItems: any[] = [];

    constructor(service: Service) {
        this.dataSource = new ArrayStore(service.getEmployees());
        this.states = service.getStates();
    }

    selectionChanged(data: any) {
        this.selectedItems = data.selectedRowsData;
    }
    
    deleteRecords() {
        this.selectedItems.forEach((item) => {
            this.dataSource.remove(item);
            this.dataGrid.instance.refresh();
        });
    }

  ngOnInit() {
  }

}
