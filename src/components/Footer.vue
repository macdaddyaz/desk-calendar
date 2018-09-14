<template>
  <v-footer app height="4.0em">
    <v-btn fab small color="secondary">
      <v-icon>info</v-icon>
    </v-btn>
    <v-chip color="secondary" outline>Desk Calendar, &copy; 2018 Eric McIntyre</v-chip>
    <v-spacer></v-spacer>
    <v-btn fab dark small color="accent">
      <v-icon>settings</v-icon>
    </v-btn>
  </v-footer>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Footer extends Vue {

  }
</script>

<style lang="scss" scoped>
  footer.v-footer {
  }
</style>
