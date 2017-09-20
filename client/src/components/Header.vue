<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-title>
      <span class="clickable" @click="navigateTo('home')">
        TabTracker
      </span>
    </v-toolbar-title>
    <!--<v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>-->
    <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark
             v-if="!$store.state.isUserLoggedIn"
             @click="navigateTo('login')">
        Log In
      </v-btn>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
             @click="navigateTo('register')">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      navigateTo (route) {
        this.$router.push({ name: route })
      }
    }
  }
</script>

<style scoped>
  .clickable:hover {
    cursor: pointer;
  }
</style>
