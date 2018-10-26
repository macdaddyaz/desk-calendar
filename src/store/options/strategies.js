function fullMonthDisplayLabel(m) {
  return m.format('MMMM Y');
}

function shortMonthDisplayLabel(m) {
  return m.format('MMM Y');
}

function compactMonthDisplayLabel(m) {
  return m.format('MMM YY');
}

export const monthDisplay = {
  full: fullMonthDisplayLabel,
  short: shortMonthDisplayLabel,
  compact: compactMonthDisplayLabel,
};

function fullWeekdayDisplayLabels(m) {
  return m.localeData().weekdays();
}

function shortWeekdayDisplayLabels(m) {
  return m.localeData().weekdaysShort();
}

function compactWeekdayDisplayLabels(m) {
  return m.localeData().weekdaysMin();
}

export const weekdayDisplay = {
  full: fullWeekdayDisplayLabels,
  short: shortWeekdayDisplayLabels,
  compact: compactWeekdayDisplayLabels,
};
