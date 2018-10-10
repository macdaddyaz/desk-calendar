<template>
  <v-card :hover="!!label" :flat="!label">
    <v-card-text>
      {{label}}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class DaySlot extends Vue {
    @Prop(Number)
    public label?: number;
  }
</script>

<style lang="scss" scoped>
  .v-card {
    vertical-align: top;
    text-align: left;
    width: 100%;
    height: 100%;
    font-weight: bold;
  }
</style>
