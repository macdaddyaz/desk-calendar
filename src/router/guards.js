import { derouterize, routerize } from '@/router/common';
import store from '@/store';
import { currentYearAndMonth } from '@/store/common';

function updateLocaleFromQuery({ locale }) {
  if (locale) {
    store.commit('updateLocale', { locale });
  }
}

/**
 * Extracts query parameters and updates the Vuex store.
 * @param to
 * @param from
 * @param next
 */
export function updateStateFromQuery(to, from, next) {
  updateLocaleFromQuery(to.query);
  next();
}

/**
 * Determines the current month and reroutes the application to it.
 * @param to
 * @param from
 * @param next
 */
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

/**
 * Updates the Vuex store with the new month from the route.
 * @param to
 * @param from
 * @param next
 */
export function updateSelectedMonth(to, from, next) {
  const path = {
    year: to.params.year,
    month: to.params.month,
  };
  const month = derouterize(path);
  store.commit('goToMonth', month);
  next();
}
