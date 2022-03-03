<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  created() {
    if (this.isAuthenticated) {
      this.$router.push({name: 'dashboard'});
    }
  },
  data: () => ({
    //
  }),
}
</script>
