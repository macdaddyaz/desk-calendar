import { store } from '@/store';
import { currentYearAndMonth } from '@/store/common';

export function routerize(realMonth) {
  const year = String(realMonth.year);
  const month = String(realMonth.month + 1);
  return {
    year,
    month,
  };
}

export function derouterize(routerPath) {
  const year = Number(routerPath.year);
  const month = Number(routerPath.month) - 1;
  return {
    year,
    month,
  };
}

// TODO Move these router-specific methods to another module
// TODO Optimize, test, document
export function updateStateFromQuery(to, from, next) {
  if (to.query) {
    if (to.query.locale) {
      store.commit('updateLocale', { locale: to.query.locale });
    }
  }
  next();
}

// TODO Document
export function redirectToCurrentMonth(to, from, next) {
  const now = currentYearAndMonth();
  const path = routerize(now);
  next({
    name: 'calendar',
    params: {
      year: path.year,
      month: path.month,
    },
    replace: true,
  });
}

// TODO Document
export function updateSelectedMonth(to, from, next) {
  const path = {
    year: to.params.year,
    month: to.params.month,
  };
  const month = derouterize(path);
  store.commit('goToMonth', month);
  next();
}
