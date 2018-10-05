import {currentCalendarMonth} from '@/store/calendar';

describe('calendar store tests', () => {
  test('currentCalendarMonth matches system time', () => {
    const calMonth = currentCalendarMonth();
    const now = new Date();

    expect(calMonth.year).toBe(now.getFullYear());
    expect(calMonth.month).toBe(now.getMonth());
  });
});
