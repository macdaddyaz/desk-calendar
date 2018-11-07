<template>
  <v-footer app height="4.0em">
    <About></About>
    <v-spacer></v-spacer>
    <Settings></Settings>
  </v-footer>
</template>

<script>
import About from '@/components/Info.vue';
import Settings from '@/components/Settings.vue';

export default {
  components: {
    About,
    Settings,
  },
};
</script>

<style lang="scss" scoped>
</style>
