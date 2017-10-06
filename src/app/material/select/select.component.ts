import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
theme ='my-theme';
 
 foods = [
    {value: 'my-theme', viewValue: 'my-theme'},
    {value: 'my-second-theme', viewValue: 'my-second-theme'},
    {value: 'tacos-2', viewValue: 'Tacos-2'}
  ];
  constructor(private overlayContainer: OverlayContainer) { 
    
  }

  ngOnInit() {
 //  this.overlayContainer.themeClass = this.theme ;
  }

onThemeChange() {
 //  this.overlayContainer.themeClass = this.theme ;
}
}
