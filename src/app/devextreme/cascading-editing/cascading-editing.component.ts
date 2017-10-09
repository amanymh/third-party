import { Component, OnInit } from '@angular/core';

import { Service, Employee, State, City } from 'app/app.service';

@Component({
  selector: 'app-cascading-editing',
  templateUrl: './cascading-editing.component.html',
  styleUrls: ['./cascading-editing.component.css'],
   providers: [Service]
})
export class CascadingEditingComponent implements OnInit {

   dataSource: Employee[];
    states: State[];
    cities: City[];

    constructor(private service: Service) {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
        this.cities = service.getCities();

        this.getFilteredCities = this.getFilteredCities.bind(this);
    }

    getFilteredCities(options) {
        return {
            store: this.cities,
            filter: options.data ? ["StateID", "=", options.data.StateID] : null
        };
    }

    onEditorPreparing(e) {
        if(e.parentType === "dataRow" && e.dataField === "CityID") {
            e.editorOptions.disabled = (typeof e.row.data.StateID !== "number");
        }
    }

    setStateValue(rowData: any, value: any): void {
        rowData.CityID = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }

  ngOnInit() {
  }

}
