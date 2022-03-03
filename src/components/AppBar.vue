<template>
  <v-app-bar
      color="primary"
      prominent
  >
    <v-img
        :src="require('../assets/logo.svg')"
        height="32"
        max-width="48"
    />

    <v-toolbar-title>Dashboard</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-logout" @click="logout"></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    logout() {
      if (confirm('Are you sure you want to Sign Out?')) {
        this.$store.dispatch('logout').then(response => {
          if (response.status) {
            this.$router.push({name: 'login'});
          }
        })
      }
    },
  },
}
</script>

<style scoped>

</style>