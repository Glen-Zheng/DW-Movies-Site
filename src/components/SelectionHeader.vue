<script setup>
import { useStore } from '../store';

const store = useStore();
</script>

<template>
  <div id="background">
    <h1 id="main-title">DW Movies</h1>
    <RouterLink id="home-link" :to="{ name: 'Home' }"><font-awesome-icon icon="fa-solid fa-house" /></RouterLink>
    <RouterLink id="login-link" :to="{ name: 'Login' }">Login</RouterLink>
    <RouterLink id="cart-link" :to="{ name: 'Cart' }">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <span id="num-cart">{{ store.cart.length }}</span>
    </RouterLink>
  </div>
</template>

<style scoped>
* {
  padding: 0;
}

#background {
  background-color: #451e3e;
  display: grid;
  grid-template-columns: repeat(3, fr);
  grid-template-rows: repeat(2, fr);
  border: 0.5rem inset #651e3e;
}

#main-title {
  grid-column: 1/4;
  grid-row: 1/2;
  font-size: 5.9rem;
  font-family: "Henny Penny", cursive;
  color: #c7594b;
  text-shadow: 2px 2px #d98d01;
}

#home-link {
  grid-column: 1/2;
  grid-row: 2/3;
  font-size: 3rem;
  border: 4px solid black;
  background-color: #851e3e;
}

#login-link {
  grid-column: 2/3;
  grid-row: 2/3;
  font-size: 3rem;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  background-color: #851e3e;
}

#cart-link {
  grid-column: 3/4;
  grid-row: 2/3;
  border: 4px solid black;
  background-color: #851e3e;
  font-size: 3rem;
}

#cart-link,
#login-link,
#home-link {
  text-decoration: none;
  font-weight: bold;
  color: rgb(224, 109, 218);
  font-family: "Xanh Mono", monospace;
}


#login-link:hover,
#home-link:hover {
  background-color: #3d3b39;
  color: #d98d01;
  transition-duration: 0.4s;
  font-size: 3.2rem;
  text-decoration: underline;
}

#cart-link:hover {
  background-color: #3d3b39;
  color: #d98d01;
  transition-duration: 0.4s;
  font-size: 3.2rem;
}


#num-cart {
  font-size: 0.8rem;
}
</style>
