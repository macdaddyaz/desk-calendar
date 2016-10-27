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
    this.router.navigateByUrl('/2016/09');
  }

}
