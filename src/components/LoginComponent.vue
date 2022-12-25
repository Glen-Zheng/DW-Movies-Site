<script setup>
import { ref, onMounted } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { onAuthStateChanged, signOut } from "firebase/auth";

const router = useRouter();
let email = ref();
let password = ref();
const errorNotice = ref();
let isLoggedIn = ref(false);
let passwordSee = ref("password");

const signIn = async () => {
  const auth = getAuth();
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert("Successfully Signed In!");
    console.log(auth.currentUser);
    router.push("/Purchase");
  } catch (error) {
    console.log(error.code);
    switch (error.code) {
      case "auth/invalid-email":
        errorNotice.value = "Invalid email";
        break;
      case "auth/user-not-found":
        errorNotice.value = "No account with that email was found";
        break;
      case "auth/wrong-password":
        errorNotice.value = "Incorrect password";
        break;
      default:
        errorNotice.value = "Email or password was incorrect";
        break;
    }
  }
};

function seePassword() {
  if (passwordSee.value === "password") {
    passwordSee.value = "text";
  } else {
    passwordSee.value = "password";
  }
}

// let auth;
// onMounted(() => {
//   auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       isLoggedIn.value = true;
//     } else {
//       isLoggedIn.value = false;
//     }
//   });
// });

// const signOutOfAccount = async () => {
//   await signOut(auth);
//   router.push("/");
// };

const signInWithGoogle = () => {
  signInWithPopup(getAuth(), new GoogleAuthProvider());
  router.push("/Purchase");
};
</script>

<template>
  <div id="background">
    <div id="login-container">
      <h3 id="login-head">Login</h3>
      <form id="form" @submit.prevent="signIn()">
        <label class="labels" for="email">Email </label>
        <input type="text" placeholder="Email" v-model="email" id="email" />
        <br />
        <label class="labels" for="password">Password </label>
        <input
          :type="passwordSee"
          placeholder="Password"
          v-model="password"
          id="password"
        />
        <br />
        <label class="labels" for="checkbox">See Password</label>
        <input type="checkbox" id="checkbox" @click="seePassword" />
        <br />
        <button type="submit" id="login-button">Login</button>
        <br />
        <p id="error" v-if="errorNotice">{{ errorNotice }}</p>
        <br />
        <button @click="signInWithGoogle()" class="lower-labels">
          Sign in with Google
        </button>
        <p id="register">
          Don't have an account?
          <RouterLink id="register-link" :to="{ name: 'Register' }"
            >Register Here</RouterLink
          >
        </p>
        <button @click="signOutOfAccount" class="lower-labels" v-if="isLoggedIn">
          Sign Out
        </button>
      </form>
    </div>
  </div>
</template>
<style scoped>
* {
  font-family: "Henny Penny", cursive;
  font-size: 1.6rem;
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
  font-size: 5.5rem;
  color: white;
}

.labels {
  color: white;
  text-shadow: 2px 2px orangered;
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

#email,
#password {
  color: rgb(230, 124, 97);
  background: rgb(31, 10, 50);
  border: 0.3rem outset rgb(11, 142, 199);
}

#register {
  color: white;
  font-family: "Lora", serif;
  width: 20rem;
  font-size: 1.45rem;
}

#register-link {
  color: aqua;
  font-family: "Lora", serif;
  font-size: 1.45rem;
}

#register-link:hover {
  color: blue;
}

#error {
  margin-top: 4px;
  background-color: black;
  color: red;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.lower-labels {
  font-family: "Lora", serif;
  background: white;
}
</style>
