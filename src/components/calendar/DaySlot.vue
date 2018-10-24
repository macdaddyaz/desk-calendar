<template>
  <v-card :hover="!!label" :flat="!label">
    <v-card-text>
      {{label}}
    </v-card-text>
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
  .v-card {
    vertical-align: top;
    text-align: left;
    width: 100%;
    height: 100%;
    font-weight: bold;
  }
</style>
