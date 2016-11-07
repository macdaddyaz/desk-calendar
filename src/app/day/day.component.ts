import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cal-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input()
  dayOfMonth: number;

  constructor() { }

  ngOnInit() {
  }

}
