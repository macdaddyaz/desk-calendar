import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class CalendarService {

  private year: number;
  private month: number;

  constructor() {
  }

  init(year?: number, month?: number) {
    if (year && month) {
      this.year = year;
      this.month = month;
    }
    else {
      let now = moment();
      this.year = now.year();
      this.month = now.month();
    }
  }

  getYear(): number {
    return this.year;
  }

  getMonth(): number {
    return this.month;
  }

  getMonthName(): string {
    return moment.months(this.month);
  }
}
