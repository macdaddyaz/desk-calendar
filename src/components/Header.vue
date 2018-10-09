<template>
  <v-toolbar app color="primary">
    <v-spacer></v-spacer>
    <v-btn light fab small color="accent" @click="decrementMonth">
      <v-icon>arrow_back_ios</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title class="month-header">{{monthName}} {{year}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn fab small color="accent" @click="incrementMonth">
      <v-icon>arrow_forward_ios</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script lang="ts">
  import {Moment} from 'moment';
  import {Component, Vue} from 'vue-property-decorator';
  import {Getter, Mutation, State} from 'vuex-class';
  import {CalendarState} from '../store/types';

  @Component
  export default class Header extends Vue {
    @Mutation
    private decrementMonth!: (state: CalendarState) => void;
    @Mutation
    private incrementMonth!: (state: CalendarState) => void;
    @State
    private selectedMonth!: Moment;
    @Getter
    private monthName!: string;

    // noinspection JSUnusedLocalSymbols
    private get year(): number {
      return this.selectedMonth.year();
    }
  }
</script>

<style lang="scss" scoped>
  .month-header {
    color: white;
    font-size: 200%;
  }
</style>
