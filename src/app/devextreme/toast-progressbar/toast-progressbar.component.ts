import { Component, OnInit } from '@angular/core';
import { Product, Service } from 'app/app.service';
import notify from 'devextreme/ui/notify';




@Component({
  selector: 'app-toast-progressbar',
  templateUrl: './toast-progressbar.component.html',
  styleUrls: ['./toast-progressbar.component.css']
})
export class ToastProgressbarComponent implements OnInit {




    
buttonText = "Start progress";

    inProgress = false;
    seconds = 10;
    maxValue = 10;
    intervalId: number;

 products: Product[];
    constructor(service: Service) {
        this.products = service.getProducts();
    }

    checkAvailable(e, products) {
        var width = 100;
        var type = e.value ? "success" : "error",

            text = products.name +
            (e.value ? " is available" : " is not available");
         
        notify(text, type, 600);

    }

    onButtonClick() {
        if (this.inProgress) {
            this.buttonText = "Continue progress";
            clearInterval(this.intervalId);
        } else {
            this.buttonText = "Stop progress";

            if(this.seconds === 0) {
                this.seconds = 10;
            }

            this.intervalId = setInterval(() => this.timer(), 1000);
        }
        this.inProgress = !this.inProgress;
    }

    timer() {
        this.seconds--;
        if (this.seconds == 0) {
            this.buttonText = "Restart progress";
            this.inProgress = !this.inProgress;
            clearInterval(this.intervalId);
            return;
        }
    }

    format(value) {
        return 'Loading: ' + value * 100 + '%';
    }

  ngOnInit() {
  }

}
