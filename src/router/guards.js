import { derouterize, routerize } from '@/router/common';
import store from '@/store';
import { normalizeDensity, YearAndMonth } from '@/store/common';

/**
 * Extracts any 'locale' parameter from the location query, and commits it to
 * the Vuex store.
 * @param locale {string}
 */
function updateLocaleFromQuery({ locale }) {
  if (locale) {
    store.commit('updateLocale', { locale });
  }
}

function updateDensityFromQuery({ density }) {
  if (density) {
    store.commit('updateDensity', { density: normalizeDensity(density) });
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
  updateDensityFromQuery(to.query);
  next();
}

/**
 * Determines the current month and reroutes the application to it.
 * @param to
 * @param from
 * @param next
 */
export function redirectToCurrentMonth(to, from, next) {
  const now = YearAndMonth.current();
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
