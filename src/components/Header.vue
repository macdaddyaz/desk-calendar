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

<script>
export default {
  computed: {
    monthName: String,
    year: Number,
  },
};
</script>

<style lang="scss" scoped>
  .month-header {
    width: 30%;
    color: white;
    font-size: 200%;
    text-align: center;
  }
</style>
