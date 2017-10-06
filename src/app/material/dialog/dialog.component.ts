import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA}  from '@angular/material';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  animal: string;
  name: string;
  constructor(public dialog: MdDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogContentComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  ngOnInit() {
  }

}
