import {Component, OnInit, Input, Output} from '@angular/core';
import {YearAndMonth} from '../calendar.service';
import {EventEmitter} from '@angular/common/src/facade/async';

@Component({
  selector: 'cal-month-nav',
  templateUrl: './month-navigation.component.html',
  styleUrls: ['./month-navigation.component.css']
})
export class MonthNavigationComponent implements OnInit {

  @Input()
  navigateTo: YearAndMonth;
  @Output()
  navigationTriggered = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  navClicked(): void {
    console.log("Nav clicked");
    this.navigationTriggered.emit({navigationTarget: this.navigateTo});
  }
}
