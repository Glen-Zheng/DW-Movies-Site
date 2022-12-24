<script setup>
import { useStore } from "../store";

const store = useStore();
</script>

<template>
  <div id="background">
    <button @click="store.emptyCart()" id="clear">Clear Cart</button>
    <p v-if="store.cart.length == 0" id="notice">You have nothing in your cart.</p>
    <div id="cart-movies">
      <div v-for="(item, index) in store.cart" id="posters-container">
        <p id="titles">{{ item.title }}</p>
        <img :src="`https://image.tmdb.org/t/p/w500${item.poster}`" />
        <button id="remove" @click="store.removeFromCart(index)">-</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#notice {
  padding-top: 30%;
  color: white;
  font-family: "Henny Penny", cursive;
  font-size: 5rem;
}

#background {
  padding-top: 2%;
  background-color: #0c062a;
  z-index: -1;
  width: 100vw;
  height: 100%;
  min-height: 100%;
}
/* :style="[
      store.movieSelection.length < 8
        ? { background: '#051e3e', width: '100vw', height: '100vh' }
        : { background: '#051e3e', width: '100%', height: '100%' },
    ]" */

#remove {
  margin-bottom: 2rem;
  aspect-ratio: 3/1;
  background-color: rgb(211, 60, 5);
  border: none;
  padding: 0px;
  cursor: pointer;
  height: 2rem;
  border-radius: 2rem;
  position: relative;
  right: 50%;
  font-size: 1.5rem;
  color: rgb(0, 0, 0);
}

#clear {
  position: relative;
  top: 360px;
  padding-top: 0;
  /* left: 45%; */
}

#cart-movies {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  padding-top: 20%;
  height: 100%;
}

#posters-container {
  margin-left: 5%;
}

#titles {
  color: white;
  width: 200px;
  text-align: none;
  position: relative;
  left: 17px;
}

img {
  aspect-ratio: 2/3;
  width: 12rem;
  border-radius: 2rem;
  border: 2px outset rgb(136, 216, 25);
  z-index: 1;
  margin: 0rem 1rem 2rem 1rem;
}

#remove:hover {
  color: #0c062a;
  background: white;
  transition-duration: 0.7s;
}

@media (width<=1280px) {
  #background {
    padding-top: 15%;
    background-color: #0c062a;
    z-index: -1;
    width: 100vw;
    height: 100%;
    min-height: 100%;
  }
}
</style>
