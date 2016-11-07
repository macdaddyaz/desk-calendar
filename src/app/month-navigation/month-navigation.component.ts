import {Component, OnInit, Input, Output} from '@angular/core';
import {YearAndMonth} from '../calendar.service';
import {EventEmitter} from '@angular/common/src/facade/async';
import {Router} from '@angular/router';

@Component({
  selector: 'cal-month-nav',
  templateUrl: './month-navigation.component.html',
  styleUrls: ['./month-navigation.component.css']
})
export class MonthNavigationComponent implements OnInit {

  @Input()
  navigateTo: YearAndMonth;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navClicked(): void {
    this.router.navigate(['/', this.navigateTo.year, this.navigateTo.month]);
  }
}
