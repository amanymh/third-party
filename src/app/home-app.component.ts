import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { InstallMaterialComponent } from './material/install-material/install-material.component';

@Component({

  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css']
})
export class HomeAppComponent implements OnInit {

   constructor(public dialog: MdDialog) {}
  ngOnInit() {
  }
 openDialog() {
    const dialogRef = this.dialog.open(InstallMaterialComponent, {
      height: '500px',width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
