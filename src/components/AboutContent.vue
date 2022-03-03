<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
      />
    </v-col>
    <v-col cols="12">
      <h1>Welcome to mPanel</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AboutContent"
}
</script>

<style scoped>

</style>