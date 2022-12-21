<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

let username = ref();
let password = ref();
let error = ref(false);
let passwordSee = ref("password");

function loginCheck() {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("./Purchase");
  } else {
    error.value = true;
  }
}

function seePassword() {
  if (passwordSee.value === "password") {
    passwordSee.value = "text";
  } else {
    passwordSee.value = "password";
  }
}
</script>

<template>
  <div id="background">
    <div id="login-container">
      <h3 id="login-head">Login</h3>
      <form @submit.prevent="loginCheck()" id="form">
        <label class="labels" for="username">Username </label>
        <input type="text" id="username" v-model="username" />
        <br />
        <label class="labels" for="password">Password </label>
        <input :type="passwordSee" id="password" v-model="password" />
        <br />
        <label class="labels" for="checkbox">See Password</label>
        <input type="checkbox" id="checkbox" @click="seePassword" />
        <br />
        <br />
        <input type="submit" value="Login" id="login-button" />
      </form>
      <div class="labels" v-if="error">
        <p>Incorrect Username/Password!</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  font-family: "Henny Penny", cursive;
  font-size: 1.7rem;
}

#background {
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url("../assets/807091.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

#login-container {
  position: absolute;
  left: 40%;
  right: 40%;
  top: 30%;
}

#login-head {
  font-weight: bold;
  font-size: 6rem;
  color: white;
}

.labels {
  color: white;
}

#form {
  width: fit-content;
  position: relative;
  right: 10%;
}

#login-button {
  background: #851e3e;
  color: rgb(11, 142, 199);
  cursor: pointer;
  width: 10rem;
  font-size: 110%;
  border: 0.2rem outset rgb(11, 142, 199);
}

#login-button:hover {
  background-color: rgb(31, 10, 50);
  color: rgb(230, 124, 97);
  transition-duration: 0.7s;
  transform: scale(1.07);
}

#username,
#password {
  color: rgb(230, 124, 97);
  background: rgb(31, 10, 50);
  border: 0.3rem outset rgb(11, 142, 199);
}
</style>
