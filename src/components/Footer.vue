<template>
  <v-footer app height="4.0em">
    <v-btn fab small color="secondary">
      <v-icon>info</v-icon>
    </v-btn>
    <v-chip color="secondary" outline>Desk Calendar, &copy; {{copyrightYear}} Eric McIntyre</v-chip>
    <v-spacer></v-spacer>
    <Settings></Settings>
  </v-footer>
</template>

<script>
import { YearAndMonth } from '@/store/common';
import Settings from '@/components/Settings.vue';

export default {
  components: {
    Settings,
  },
  computed: {
    copyrightYear() {
      return YearAndMonth.current().year;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
