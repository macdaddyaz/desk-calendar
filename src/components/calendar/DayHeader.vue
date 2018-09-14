<template>
  <v-chip color="secondary">{{label}}</v-chip>
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
  .v-chip {
    height: 24px;
    margin-left: -4px;
    margin-right: -4px;
    color: white;
    font-weight: bold;
  }
</style>
