<template>
  <v-toolbar app color="primary">
    <v-spacer></v-spacer>
    <v-btn light fab small color="accent" >
      <v-icon>arrow_back_ios</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title class="month-header">September 2018</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn fab small color="accent">
      <v-icon>arrow_forward_ios</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {

  }
</script>

<style lang="scss" scoped>
  .month-header {
    color: white;
    font-size: 200%;
  }
</style>
