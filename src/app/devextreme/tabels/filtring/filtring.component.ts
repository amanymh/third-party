import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';


import { DxDataGridComponent } from 'devextreme-angular';

import { Employee, Service } from 'app/app.service';

@Component({
  selector: 'app-filtring',
  templateUrl: './filtring.component.html',
  styleUrls: ['./filtring.component.css'],
   providers: [ Service ]
})
export class FiltringComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
    orders: Employee[];
    saleAmountHeaderFilter: any;
    applyFilterTypes: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;

    constructor(service: Service) {
        this.orders = service.getEmployees() ;
        this.showFilterRow = true;
        this.showHeaderFilter = true;
        this.applyFilterTypes = [{
            key: "auto",
            name: "Immediately"
        }, {
            key: "onClick",
            name: "On Button Click"
        }];
        this.saleAmountHeaderFilter = [{
            text: "Less than $3000",
            value: ["SaleAmount", "<", 3000]
        }, {
            text: "$3000 - $5000",
            value: [
                ["SaleAmount", ">=", 3000],
                ["SaleAmount", "<", 5000]
            ]
        }, {
            text: "$5000 - $10000",
            value: [
                ["SaleAmount", ">=", 5000],
                ["SaleAmount", "<", 10000]
            ]
        }, {
            text: "$10000 - $20000",
            value: [
                ["SaleAmount", ">=", 10000],
                ["SaleAmount", "<", 20000]
            ]
        }, {
            text: "Greater than $20000",
            value: ["SaleAmount", ">=", 20000]
        }];
        this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
    }

    getOrderDay(rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    }

    orderHeaderFilter(data) {
        data.dataSource.postProcess = (results) => {
            results.push({
                text: "Weekends",
                value: [
                    [this.getOrderDay, "=", 0],
                    "or", [this.getOrderDay, "=", 6]
                ]
            });

            return results;
        };
    }

    clearFilter() {
        this.dataGrid.instance.clearFilter();
    }

  ngOnInit() {
  }

}
