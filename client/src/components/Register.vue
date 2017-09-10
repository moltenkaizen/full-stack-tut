<template>
  <div>
  <h1>Register</h1>
  <form @submit.prevent="register">
    <input v-model="email" type="email" placeholder="email">
    <input v-model="password" type="password" placeholder="password">
    <button>Register</button>
  </form>
  </div>
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
      async register () {
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
          console.log(response.data)
//          this.$store.dispatch('setToken', response.data.token)
//          this.$store.dispatch('setUser', response.data.user)
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
