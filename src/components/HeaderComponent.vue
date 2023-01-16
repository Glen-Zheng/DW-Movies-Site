<script setup></script>

<template>
  <div id="header">
    <RouterLink id="logo" :to="{ name: 'Home' }"><img title="Home"
        src="../assets/Screenshot_2022-11-30_212145-removebg-preview.png" /></RouterLink>
    <h1 id="title">DW Movies</h1>
    <RouterLink :to="{ name: 'Login' }" custom v-slot="{ navigate }">
      <button id="login" @click="navigate" role="link">Login/Register</button>
    </RouterLink>
  </div>
</template>

<style scoped>
#header {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, fr);
  grid-template-rows: 1fr;
  margin: 0;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  border: 0.5rem inset rgb(249, 164, 6);
  background-color: #8a9a5b;
  z-index: 5;
}

#title {
  grid-column: 1/4;
  grid-row: 1/2;
  color: rgb(210, 184, 237);
  font-family: "Henny Penny", cursive;
  font-size: 6rem;
  place-self: center;
}

#login {
  font-weight: bold;
  color: rgb(7, 7, 85);
  text-decoration: none;
  border-radius: 0.5rem;
  grid-column: 3/4;
  grid-row: 1/2;
  font-family: "Henny Penny", cursive;
  justify-self: end;
  position: relative;
  right: 5%;
  width: 40%;
  min-width: fit-content;
  aspect-ratio: 5/1;
  background-color: rgb(224, 29, 120);
  border-radius: 8px;
  font-size: 2rem;
  cursor: pointer;
}

#login:focus,
#login:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

#logo:focus {
  border: 1px solid white;
}

#logo {
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: start;
  align-self: center;
}
</style>
