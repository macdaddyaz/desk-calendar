import store from '@/store';
import Calendar from '@/views/Calendar.vue';
import Vue from 'vue';
import Router, {RawLocation, Route} from 'vue-router';

// noinspection TypeScriptUnresolvedFunction
Vue.use(Router);

function redirectToCurrentMonth(to: Route,
                                from: Route,
                                next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void): void {
  const year = store.getters.year;
  const month = store.getters.friendlyMonth;
  next({name: 'calendar', params: {year, month}, replace: true});
}

export const routes = [
  {path: '/', component: Calendar, beforeEnter: redirectToCurrentMonth},
  {path: '/:year/:month', name: 'calendar', component: Calendar},
];

export default new Router({
  mode: 'history',
  routes,
});
