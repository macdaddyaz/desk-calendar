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

const initialMonth = currentMonth();

export default new Vuex.Store({
  state: {
    selectedMonth: initialMonth,
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
