import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class CalendarService {

  private _year: number;
  private _month: number;

  constructor() {
  }

  init(year?: number, month?: number): void {
    if (year && month) {
      this._year = year;
      this._month = month;
    }
    else {
      let now = moment();
      this._year = now.year();
      this._month = now.month();
    }
  }

  year(): number {
    return this._year;
  }

  month(): number {
    return this._month;
  }

  monthName(): string {
    return moment.months(this._month);
  }
}
