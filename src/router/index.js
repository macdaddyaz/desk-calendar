import { redirectToCurrentMonth, updateSelectedMonth, updateStateFromQuery } from '@/router/common';
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

const router = new Router({
  mode: 'history',
  routes,
});
router.beforeEach(updateStateFromQuery);

// noinspection JSUnusedGlobalSymbols
export default router;
