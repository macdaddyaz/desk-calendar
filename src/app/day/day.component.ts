import {Component, Input} from '@angular/core';

@Component({
  selector: 'cal-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  @Input()
  dayOfMonth: number;

  constructor() { }
}
