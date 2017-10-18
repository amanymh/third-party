import { Component } from '@angular/core';
import { Customer, Service } from 'app/app.service';

@Component({
  selector: 'app-load-indicator',
  templateUrl: './load-indicator.component.html',
  styleUrls: ['./load-indicator.component.css']
})
export class LoadIndicatorComponent  {

  loadIndicatorVisible = false;
    buttonText = "Send";

  customer : Customer;
    employeeInfo: any = {};
    loadingVisible = false;

    constructor(service: Service) {
        this.customer = service. getCustomer();
    }

    onShown() {
        setTimeout(() => {
            this.loadingVisible = false;
        }, 3000);
    }

    onHidden() {
        this.employeeInfo = this.customer;
    }

    showLoadPanel() {
        this.employeeInfo = {};
        
        this.loadingVisible = true;
    }

    onClick(data) {
        this.buttonText = "Sending";
        this.loadIndicatorVisible = true;

        setTimeout(() => {
            this.buttonText = "Send";
            this.loadIndicatorVisible = false;
        }, 2000);
    }
}



  
 