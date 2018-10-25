<template>
  <v-toolbar app color="primary">
    <v-spacer></v-spacer>
    <v-btn light fab small color="accent" @click="goPrevious">
      <v-icon>arrow_back_ios</v-icon>
    </v-btn>
    <v-toolbar-title class="month-header">{{monthName}} {{year}}</v-toolbar-title>
    <v-btn fab small color="accent" @click="goNext">
      <v-icon>arrow_forward_ios</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    previous: Object,
    next: Object,
  },
  computed: {
    ...mapGetters([
      'monthName',
      'year',
    ]),
  },
  methods: {
    goPrevious() {
      this.$router.push({
        name: 'calendar',
        params: this.previous,
      });
    },
    goNext() {
      this.$router.push({
        name: 'calendar',
        params: this.next,
      });
    },
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
