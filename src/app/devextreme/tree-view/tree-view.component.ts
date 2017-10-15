import { Component, OnInit } from '@angular/core';
import { Product, Service } from 'app/app.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  products: Product[];
    currentItem: Product;

    constructor(service: Service) {
        this.products = service.getProducts();
        this.currentItem = this.products[0];
    }
    selectItem(e) {
        this.currentItem = e.itemData;
    }
  ngOnInit() {
  }

}
