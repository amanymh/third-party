import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

    dataSource: any;
     defaultVisible = false;
    constructor() {
        this.dataSource = [{
                text: 'Share', 
                icon: 'dx-icon-globe',
                items: [
                    { text: 'Facebook' },
                    { text: 'Twitter' }]
            },
            { text: 'Download', icon: 'dx-icon-download' },
            { text: 'Add Comment', icon: 'dx-icon-add' },
            { text: 'Add to Favorite', icon: 'dx-icon-favorites' }
        ];
   }

   itemClick(e) {
       if (!e.itemData.items) {
           notify("The \"" + e.itemData.text + "\" item was clicked", "success", 1500);
       }
   }
 toggleDefault() {
        this.defaultVisible = !this.defaultVisible;
    }
  ngOnInit() {
  }

}
