import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
 value: Date = new Date(1981, 3, 27);
    now: Date = new Date();
    min: Date = new Date(1900, 0, 1);
    dateClear = new Date(2015, 11, 1, 6);
  constructor() { }

  ngOnInit() {
  }
get diffInDay() {
        return Math.floor(Math.abs(((new Date()).getTime() - this.value.getTime())/(24*60*60*1000))) + " days";
    }
}
