<template>
  <v-toolbar app color="primary">
    <v-spacer></v-spacer>
    <v-btn light fab small color="accent" @click="goPrevious">
      <v-icon size="2.5em">mdi-chevron-left</v-icon>
    </v-btn>
    <v-toolbar-title class="month-header">{{monthDisplayLabel}}</v-toolbar-title>
    <v-btn fab small color="accent" @click="goNext">
      <v-icon size="2.5em">mdi-chevron-right</v-icon>
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
      'monthDisplayLabel',
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
