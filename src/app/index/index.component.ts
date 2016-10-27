import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router,
              private calendarService: CalendarService) {
  }

  ngOnInit() {
    // Initialize the Calendar Service to 'default'
    this.calendarService.init();
    this.router.navigate(['/', this.calendarService.year, this.calendarService.month + 1]);
  }

}
