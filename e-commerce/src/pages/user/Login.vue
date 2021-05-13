<template>
  <div class="loginContrainer">
    <div class="loginFormContainer">
        <h1>Login Page</h1>
      <div class="form-group">
        <label for="">Email</label>
        <input type="text" class="form-control" id="create-post" v-model="emailText" placeholder="name@email.com">
      </div>
      <div class="form-group">
        <label for="">Psssword</label>
        <input type="text" class="form-control" id="create-post" v-model="passwordText" placeholder="Password">
      </div>
      <div class="submit">
        <b-button @click="login">Login</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import user from '../../user-service';
export default { 
  name: 'Login',
  components: {
  },
  data() {
    return {
      error: '',
      emailText: '',
      passwordText:''
    }
  },
  methods:{
    async login() {
        user.login(this.emailText, this.passwordText)
    }  
  }
}

</script>


