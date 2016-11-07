import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {currentMonth, YearAndMonth} from '../calendar.service';

/**
 * IndexComponent's sole job is to forward the application to the current month
 * and year.
 */
@Component({
  selector: 'cal-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    let now: YearAndMonth = this.currentMonth();
    this.router.navigate(['/', now.year, now.month]);
  }

  currentMonth(): YearAndMonth {
    return currentMonth();
  }
}
