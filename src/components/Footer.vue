<template>
  <v-footer app height="4.0em">
    <v-btn fab small color="secondary">
      <v-icon>info</v-icon>
    </v-btn>
    <v-chip color="secondary" outline>Desk Calendar, &copy; {{copyrightYear}} Eric McIntyre</v-chip>
    <v-spacer></v-spacer>
    <v-btn fab dark small color="accent">
      <v-icon>settings</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
import { currentMonth } from '@/store/common';

export default {
  computed: {
    copyrightYear() {
      return currentMonth().year();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
