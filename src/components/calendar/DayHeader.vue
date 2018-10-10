<template>
  <v-card flat color="secondary">
    <v-card-text class="day-header">{{label}}</v-card-text>
  </v-card>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class DayHeader extends Vue {
    @Prop(String)
    public label?: string;
  }
</script>

<style lang="scss" scoped>
  .day-header {
    padding: 4px;
    color: white;
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
