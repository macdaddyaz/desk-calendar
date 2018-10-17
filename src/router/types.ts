import Vue from 'vue';
import {RawLocation} from 'vue-router';

/**
 * Type representing the parts of the calendar routing path, namely `/year/month`.
 */
export interface CalendarRouterPath {
  year: string;
  month: string;
}

/**
 * The type of the "location" parameter (i.e. `to`) that router callbacks use.
 */
export type RouterHookCallbackLocation = RawLocation | false | ((vm: Vue) => any) | void;
/**
 * The function signature of a router callback (i.e. `next`).
 */
export type RouterHookCallback = (to?: RouterHookCallbackLocation) => void;
