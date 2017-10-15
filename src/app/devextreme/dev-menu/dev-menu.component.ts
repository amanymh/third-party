import { Component, OnInit } from '@angular/core';
import { Product, Service } from 'app/app.service';

@Component({
  selector: 'app-dev-menu',
  templateUrl: './dev-menu.component.html',
  styleUrls: ['./dev-menu.component.css']
})
export class DevMenuComponent implements OnInit {

  products: Product[];
    showSubmenuModes: any;
    showFirstSubmenuModes: any;
    currentProduct: Product;

    constructor(service: Service) {
        this.products = service.getProducts();
        this.showSubmenuModes = [{
            name: "onHover",
            delay: { show: 0, hide: 500 }
        }, {
            name: "onClick",
            delay: { show: 0, hide: 300 }
        }];
        this.showFirstSubmenuModes = this.showSubmenuModes[1];
    }
    itemClick(d) {
        let item = d.itemData;

        if(item.price) {
            this.currentProduct = item;
        }
    }

  ngOnInit() {
  }

}
