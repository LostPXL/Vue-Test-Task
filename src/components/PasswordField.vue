<template>
  <v-text-field
      @change="$emit('change', $event)"
      hint="This field required"
      label="Password"
      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPass = !showPass"
      required
      outlined
      dense
      dark
      filled
      :type="showPass ? 'text' : 'password'"
  ></v-text-field>
</template>

<script>
export default {
  name: "PasswordField",
  model: {
    event: 'change'
  },
  props: {
    value: String
  },
  data: () => {
    return {
      showPass: false,
    }
  }
}
</script>

<style scoped>

</style>