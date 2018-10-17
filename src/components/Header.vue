<template>
  <v-toolbar app color="primary">
    <v-spacer></v-spacer>
    <v-btn light fab small color="accent">
      <v-icon>arrow_back_ios</v-icon>
    </v-btn>
    <v-toolbar-title class="month-header">{{monthName}} {{year}}</v-toolbar-title>
    <v-btn fab small color="accent">
      <v-icon>arrow_forward_ios</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script lang="ts">
  import {Moment} from 'moment';
  import {Component, Vue} from 'vue-property-decorator';
  import {Getter, State} from 'vuex-class';

  @Component
  export default class Header extends Vue {
    @State
    private selectedMonth!: Moment;
    @Getter
    private monthName!: string;
    @Getter
    private year!: number;
  }
</script>

<style lang="scss" scoped>
  .month-header {
    width: 30%;
    color: white;
    font-size: 200%;
    text-align: center;
  }
</style>
