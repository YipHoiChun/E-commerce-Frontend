import axios from 'axios';

const loginUrl = 'http://localhost:3000/auth/'
const registerUrl = 'http://localhost:3000/users'

class UserService {

  // login 
  static login(email, password) {
    return axios.post(loginUrl, {
        email, password
    })
    .then((response) => {
      console.log("Message: " + response.data);
      alert(response.data)
    })
    .catch(function (error) {
      if (error.response) {
        alert("Register Error: " + error.response.data.msg)
      }
    })
  }
  // register
  static register(name, email, password) {
    return axios.post(registerUrl, {
      name, email, password
    })
    .then((response) => {
      console.log("Message: " + response.data)
      alert(response.data)
    })
    .catch(function (error) {
      if (error.response) {
        alert("Register Error: " + error.response.data.msg)
      }
    })
  }
}

export default UserService
