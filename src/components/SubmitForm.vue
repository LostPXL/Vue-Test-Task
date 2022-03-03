<template>
  <div class="text-center">
    <v-btn class="signin-btn" @click="$emit('click', $event)" type="submit" rounded color="white" dark>
      Sign In
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "SubmitForm",
  model: {
    event: 'click'
  },
}
</script>

<style scoped>

</style>