import {CalendarRouterPath, RouterHookCallback} from '@/router/types';
import store from '@/store';
import {currentYearAndMonth} from '@/store/calendar';
import {YearAndMonth} from '@/store/types';
import {Route} from 'vue-router';

export function routerize(realMonth: YearAndMonth): CalendarRouterPath {
  const year = String(realMonth.year);
  const month = String(realMonth.month + 1);
  return {year, month};
}

export function derouterize(routerPath: CalendarRouterPath): YearAndMonth {
  const year = Number(routerPath.year);
  const month = Number(routerPath.month) - 1;
  return {year, month};
}

export function redirectToCurrentMonth(to: Route,
                                       from: Route,
                                       next: RouterHookCallback): void {
  const now = currentYearAndMonth();
  const path = routerize(now);
  next({name: 'calendar', params: {year: path.year, month: path.month}, replace: true});
}

export function updateSelectedMonth(to: Route,
                                    from: Route,
                                    next: RouterHookCallback): void {
  const path = {year: to.params['year'], month: to.params['month']};
  const month = derouterize(path);
  store.commit('goToMonth', month);
  next();
}
