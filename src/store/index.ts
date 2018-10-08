import {
  currentMonth,
  daysOfMonth,
  decrementMonth,
  incrementMonth,
  monthName,
  nextMonth,
  previousMonth,
  weekdayNames,
} from '@/store/calendar';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMonth: currentMonth(),
  },
  getters: {
    previousMonth,
    nextMonth,
    monthName,
    weekdayNames,
    daysOfMonth,
  },
  mutations: {
    decrementMonth,
    incrementMonth,
  },
  actions: {},
});
