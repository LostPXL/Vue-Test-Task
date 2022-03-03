<template>
  <v-text-field
      @change="$emit('change', $event)"
      hint="This field required"
      label="Email"
      required
      outlined
      dark
      filled
      dense
  ></v-text-field>
</template>

<script>
export default {
  name: "UsernameField",
  model: {
    event: 'change'
  },
  props: {
    value: String
  },
}
</script>

<style scoped>

</style>