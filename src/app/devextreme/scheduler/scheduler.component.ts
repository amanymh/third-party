import { Component, OnInit } from '@angular/core';
import {Appointment, SchedulerService} from 'app/scheduler.service';


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
 appointmentsData: Appointment[];
    currentDate: Date = new Date(2017, 4, 25);

    constructor(service: SchedulerService) {
        this.appointmentsData = service.getAppointments();
    }

  ngOnInit() {
  }

}
