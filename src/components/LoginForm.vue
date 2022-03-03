<template>
  <v-form @submit.prevent="submit">
    <UsernameField v-model="email" />
    <PasswordField v-model="password" />
    <SubmitForm @click="submit" />
  </v-form>
</template>

<script>
import PasswordField from "@/components/PasswordField";
import UsernameField from "@/components/UsernameField";
import SubmitForm from "@/components/SubmitForm";
import {mapGetters} from "vuex";

export default {
  name: "LoginForm",

  components: {SubmitForm, PasswordField, UsernameField},

  data: () => ({
    email: '',
    password: '',
    showPass: false,
  }),
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ]),
    params() {
      return {
        email: this.email,
        password: this.password
      }
    }
  },
  methods: {
    async submit() {
      this.$store.dispatch('login', this.params).then(response => {
        if (response.status) {
          this.$router.push({name: 'dashboard'});
        }
      })
    },
  }
}

</script>

<style scoped>

</style>