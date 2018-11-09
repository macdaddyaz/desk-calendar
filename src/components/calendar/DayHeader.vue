<template>
  <v-card flat color="secondary">
    <v-card-text class="day-header">{{label}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
  .day-header {
    padding: 4px;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
