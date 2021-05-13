<template>
  <div class="registerPageContainer">
    <div class="registerFormContainer">
      <h1>Register Form</h1>
      <b-form-group
        id="fieldset-1"
        label="Enter your name"
        label-for="input-1"
        :invalid-feedback="nameInvalid"
        :valid-feedback="nameValid"
        :state="nameLength"
      >
        <b-form-input
          id="input-1"
          v-model="nameText"
          :state="null"
          trim
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-2"
        label="Enter your Email"
        label-for="input-2"
        :invalid-feedback="emailInvalid"
        :valid-feedback="emailValid"
        :state="emailState"
      >
        <b-form-input
          id="input-2"
          v-model="emailText"
          :state="null"
          :type="password"
          trim
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-3"
        label="Password"
        label-for="input-3"
        :invalid-feedback="invalidPassword"
        :state="passwordState"
      >
        <b-form-input
          id="input-3"
          v-model="passwordText"
          :state="null"
          trim
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Repeat Password"
        label-for="input-4"
        :invalid-feedback="rePasswordInvalid"
        :valid-feedback="rePasswordValid"
        :state="rePasswordState"
      >
        <b-form-input
          id="input-4"
          v-model="rePasswordText"
          :state="null"
          trim
        ></b-form-input>
      </b-form-group>
      <div class="submitBtn">
        <b-button @click="createUser">Create User</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import user from "../../user-service"

export default {
  name: "Register",
  components: {
  },
  computed: {
    nameLength() {return this.nameText.length >= 3 ? true : false},
    nameInvalid() {return this.nameText.length > 0 ? 'Enter at least 3 characters' : ''},
    nameValid() {return this.nameState === true ? 'Meet the criteria' : ''},

    emailState() {return this.emailText.includes('@') ? true : false},
    emailInvalid() {return !this.emailText.includes('@') && this.emailText.length > 0 ? 'Please input email with' + ' @ ' : ''},
    emailValid() {return this.emailState === true ? 'Meet the criteria' : ''},

    rePasswordState() {return this.rePasswordText === this.passwordText && this.rePasswordText.length >= 6 && this.passwordText.length >= 6 ? true : false},
    rePasswordInvalid() {return this.rePasswordText !== this.passwordText || this.passwordText.length > 0 || this.rePasswordText.length > 0 ? 'password not match' : ''},
    rePasswordValid() {return this.rePasswordState === true ? 'Meet the criteria' : ''},
  },
    data() {
      return {
        nameText: '',
        emailText:'',
        passwordText:'',
        rePasswordText:''
      }
    },
    methods: {
    async createUser() {
        user.register(this.nameText, this.emailText, this.passwordText)
      }
    }
}
</script>

