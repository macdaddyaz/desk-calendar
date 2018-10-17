import Vue from 'vue';
import {RawLocation} from 'vue-router';

export interface CalendarRouterPath {
  year: string;
  month: string;
}

export type RouterHookCallbackLocation = RawLocation | false | ((vm: Vue) => any) | void;
export type RouterHookCallback = (to?: RouterHookCallbackLocation) => void;
