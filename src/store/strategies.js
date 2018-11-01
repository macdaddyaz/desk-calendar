export const monthDisplay = {
  full: moment => moment.format('MMMM Y'),
  short: moment => moment.format('MMM Y'),
  compact: moment => moment.format('MMM YY'),
};

export const weekdayDisplay = {
  full: moment => moment.localeData().weekdays(),
  short: moment => moment.localeData().weekdaysShort(),
  compact: moment => moment.localeData().weekdaysMin(),
};
