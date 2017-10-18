import { Component, OnInit } from '@angular/core';
import { Employee, Service } from 'app/app.service';
@Component({
  selector: 'app-popup-popover',
  templateUrl: './popup-popover.component.html',
  styleUrls: ['./popup-popover.component.css']
})
export class PopupPopoverComponent implements OnInit {
  defaultVisible: boolean;
    withTitleVisible: boolean;
    withAnimationOptionsVisible: boolean;
    withShadingOptionsVisible: boolean;
 currentEmployee: Employee = new Employee();
    employees: Employee[];
    popupVisible = false;

    constructor(service: Service) {
        this.employees = service.getEmployees();
        this.defaultVisible = false;
        this.withTitleVisible = false;
        this.withAnimationOptionsVisible = false;
        this.withShadingOptionsVisible = false;
    }

    showInfo(employee) {
        this.currentEmployee = employee;
        this.popupVisible = true;
    }
 toggleDefault() {
        this.defaultVisible = !this.defaultVisible;
    }
    toggleWithTitle() {
        this.withTitleVisible = !this.withTitleVisible;
    }
    toggleWithAnimationOptions() {
        this.withAnimationOptionsVisible = !this.withAnimationOptionsVisible;
    }
    toggleWiithShadingOptions() {
        this.withShadingOptionsVisible = !this.withShadingOptionsVisible;
    }
  ngOnInit() {
  }

}
