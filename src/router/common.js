import store from '@/store';
import { currentYearAndMonth } from '@/store/calendar';

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

export function updateSelectedMonth(to, from, next) {
  const path = {
    year: to.params.year,
    month: to.params.month,
  };
  const month = derouterize(path);
  store.commit('goToMonth', month);
  next();
}
