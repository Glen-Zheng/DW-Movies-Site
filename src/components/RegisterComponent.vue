<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/index";
import { useRouter } from "vue-router";

const router = useRouter();
let email = ref();
let password = ref();
const errorNotice = ref();
let emailAlreadyUsed = ref(false);

const register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Successfully Registered!");
    router.push("/Purchase");
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        errorNotice.value = "Invalid email";
        emailAlreadyUsed.value = false;
        break;
      case "auth/email-already-in-use":
        errorNotice.value = "Email already in use, please log in";
        emailAlreadyUsed.value = true;
        break;
      case "auth/weak-password":
        errorNotice.value = "Weak Password. Please make a stronger password";
        emailAlreadyUsed.value = false;
        break;
      default:
        errorNotice.value = "Error. Invalid email or password";
        emailAlreadyUsed.value = false;
        break;
    }
  }
};
</script>

<template>
  <div id="background">
    <form @keyup.enter="register()" @submit.prevent="register()" id="sign-up">
      <h1 id="title">Create An Account</h1>
      <div id="questions">
        <label class="labels" for="email">Email: </label>
        <input type="text" placeholder="Email" id="email" v-model="email" />
        <br />
        <br />
        <label class="labels" for="password">Password: </label>
        <input type="password" placeholder="Password" id="password" v-model="password" />
        <br />
        <br />
      </div>
      <button type="submit" id="button">Submit</button>
      <br />
      <br />
      <span v-if="errorNotice" id="error">{{ errorNotice }} &nbsp</span>
      <RouterLink v-if="emailAlreadyUsed" :to="{ name: 'Login' }" id="back-to-login"
        >Here</RouterLink
      >
    </form>
  </div>
</template>

<style scoped>
#background {
  background-color: rgb(6, 54, 103);
  z-index: -5;
  width: 100vw;
  height: 100vh;
}

#title {
  font-family: "Henny Penny", cursive;
  font-size: 4rem;
  color: white;
}

#password,
#email {
  width: 25%;
  aspect-ratio: 9/1;
  border: 2px outset rgb(7, 82, 7);
  background-color: darkorange;
  font-size: 1.5rem;
}

#error {
  font-size: 1.8rem;
  color: white;
}

#button {
  background: white;
  width: 150px;
  aspect-ratio: 3/1;
  font-family: fantasy;
  font-size: 2rem;
}
#questions {
  padding-top: 5%;
}

.labels {
  font-size: 2rem;
  color: chartreuse;
}

#sign-up {
  position: relative;
  top: 30%;
}

#back-to-login {
  color: rgb(133, 128, 207);
  font-size: 1.8rem;
  text-decoration: none;
}
#back-to-login:hover {
  text-decoration: underline;
  text-shadow: 0.5px 0.5px orangered;
}
</style>
