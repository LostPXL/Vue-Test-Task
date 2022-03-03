<template>
  <v-card>
    <v-layout>
      <AppBar />
      <NavigationBar />
      <v-main style="margin-top: 2px;">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import AppBar from "@/components/AppBar";
import NavigationBar from "@/components/NavigationBar";
export default {
  components: {AppBar, NavigationBar},
  created() {
    if (!this.$store.getters.isAuthenticated) {
      this.$router.push({name: 'login'});
    }
  },
}
</script>