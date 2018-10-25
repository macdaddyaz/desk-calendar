import { redirectToCurrentMonth, updateSelectedMonth } from '@/router/common';
import Calendar from '@/views/Calendar.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    component: Calendar,
    beforeEnter: redirectToCurrentMonth,
  },
  {
    path: '/:year/:month',
    name: 'calendar',
    component: Calendar,
    beforeEnter: updateSelectedMonth,
  },
];

// noinspection JSUnusedGlobalSymbols
export default new Router({
  mode: 'history',
  routes,
});
