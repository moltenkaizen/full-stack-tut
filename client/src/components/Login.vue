<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Log In</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pb-2 pt-2">

          <v-form>
            <v-text-field
              label="Email"
              v-model="email"
              required
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              required
            ></v-text-field>
            <br>
            <v-btn class="cyan" dark @click="login">Log In</v-btn>
          </v-form>

        </div>
        <div v-html="error" class="error">{{ error }}</div>
      </div>
    </v-flex>

  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  //  import Panel from '@/components/Panel'

  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login () {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          console.log(response.data)
          this.error = ''
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    },
    components: {
      // Panel
    }
  }
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
