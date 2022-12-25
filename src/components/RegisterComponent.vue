<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
let email = ref();
let password = ref();
const errorNotice = ref();

const register = async () => {
  try {
    await createUserWithEmailAndPassword(getAuth(), email.value, password.value);
    alert("Successfully Registered!");
    router.push("/Purchase");
  } catch (error) {
    console.log(error.code);
    switch (error.code) {
      case "auth/invalid-email":
        errorNotice.value = "Invalid email";
        break;
      case "email-already-in-use":
        errorNotice.value = "Email already in use, please log in";
        break;
      case "auth/weak-password":
        errorNotice.value = "Weak Password. Please make a stronger password";
        break;
      default:
        errorNotice.value = "Error. Invalid email or password";
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
        <input type="text" placeholder="Password" id="password" v-model="password" />
        <br />
        <br />
      </div>
      <button type="submit" id="button">Submit</button>
      <br />
      <br />
      <p v-if="errorNotice" id="error">{{ errorNotice }}</p>
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

#email {
  width: 20%;
  aspect-ratio: 9/1;
  border: 2px outset rgb(7, 82, 7);
  background-color: darkorange;
  font-size: 1.5rem;
}

#password {
  width: 20%;
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
</style>
