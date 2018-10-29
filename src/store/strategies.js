export const monthDisplay = {
  full: m => m.format('MMMM Y'),
  short: m => m.format('MMM Y'),
  compact: m => m.format('MMM YY'),
};

export const weekdayDisplay = {
  full: m => m.localeData().weekdays(),
  short: m => m.localeData().weekdaysShort(),
  compact: m => m.localeData().weekdaysMin(),
};
