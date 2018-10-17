import {
  currentMonth,
  daysOfMonth,
  goToMonth,
  monthName,
  nextMonth,
  previousMonth,
  weekdayNames,
  year,
} from '@/store/calendar';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export * from './types';

const initialMonth = currentMonth();

export default new Vuex.Store({
  state: {
    selectedMonth: initialMonth,
  },
  getters: {
    previousMonth,
    nextMonth,
    monthName,
    year,
    weekdayNames,
    daysOfMonth,
  },
  mutations: {
    goToMonth,
  },
  actions: {},
});
