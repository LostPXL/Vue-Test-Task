<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="8" class="left">
        <AboutContent />
      </v-col>
      <v-col cols="4" class="right">
        <h2>LOGIN</h2>
        <LoginForm />
      </v-col>
    </v-row>
  </section>
</template>

<script>

import {mapGetters} from "vuex";
import LoginForm from "@/components/LoginForm";
import AboutContent from "@/components/AboutContent";


export default {
  components: {LoginForm, AboutContent},
  data: () => ({
    email: '',
    password: '',
  }),
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ]),
  },
  created() {
    if (this.isAuthenticated) {
      this.$router.push({name: 'dashboard'});
    }
  },
}

</script>


<style>
.section-container {
  padding: 20px;
  margin: 20px;
  background: #fff;
  width: 100%;
}

.section-container .signin {
  padding: 0;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 600px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
}

.section-container .signin .left {
  padding: 30px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  color: #ac3030;
  background-color: #f9f9f9;
}

.section-container .signin .right {
  padding: 30px;
  box-sizing: border-box;
  background: #ac3030;
  color: #fff;
}

.section-container .signin .right h2 {
  text-align: center;
  margin: 30px 0;
}

.section-container .signin .right .signin-btn {
  width: 100%;
  color: #ac3030;
}

</style>