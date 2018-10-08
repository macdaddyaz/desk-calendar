import moment, {Moment} from 'moment';

export function currentMonth(): Moment {
  return moment().date(1);
}

export function createMoment(year: number, month: number): Moment {
  return moment().year(year).month(month).date(1);
}
