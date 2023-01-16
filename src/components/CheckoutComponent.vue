<script setup>
import { useStore } from "../store";
import { ref } from "vue";

const store = useStore();
let noti = ref(false);

const orderPlaced = () => {
  noti.value = true;
};
let cost = store.cart.length;
</script>

<template>
  <div>
    <div id="title-container">
      <h1 id="title" class="typewriter">Checkout</h1>
      <RouterLink id="cart" :to="{ name: 'Cart' }"><font-awesome-icon id="cart-img"
          icon="fa-solid fa-circle-arrow-left" /></RouterLink>
    </div>
    <p v-if="store.cart.length == 0" id="notice">You have nothing in your cart.</p>
    <ol>
      <li v-for="item in store.cart">
        <img id="item" :src="`https://image.tmdb.org/t/p/w500${item.poster}`" />
        <p id="cost">$1</p>
      </li>
    </ol>
    <div id="payment">
      <h1>Total: ${{ cost }}</h1>
      <label for="card">Card Number: </label>
      <input id="card" type="text" />
      <button id="place-order" @click="[orderPlaced(), store.emptyCart()]">
        Place Order
      </button>
      <p v-if="noti">
        Thank you! You will now get a one-time unique link with the movie(s) to your
        email. You can purchase more now if you want.
      </p>
    </div>
  </div>
</template>

<style scoped>
#title-container {
  width: 100vw;
  position: absolute;
  top: 0;
}

#title {
  margin-top: 2rem;
  font-size: 5rem;
  font-family: "Henny Penny", cursive;
  text-align: center;
  text-shadow: 2px 2px skyblue;
}

.typewriter {
  width: 6.1ch;
  animation: typing 1.7s steps(40), blink 0.38s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  margin: 0 auto;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

#cart {
  position: absolute;
  left: 3rem;
  top: 3rem;
}

#cart-img {
  font-size: 4.5rem;
}

#cart:hover {
  color: chartreuse;
  transition-duration: 0.4s;
}

#notice {
  font-size: 3rem;
  font-family: "Roboto Slab", serif;
  margin-left: 2rem;
}

#item {
  width: 8rem;
  border-radius: 1rem;
  aspect-ratio: 2/3;
  border: 3px inset skyblue;
}

#cost {
  margin-bottom: 0.6rem;
  text-align: center;
}

ol {
  font-size: 3rem;
  font-weight: bold;
  width: fit-content;
  margin-left: 2em;
  margin-top: 60%;
}

ol li {
  margin-left: 2em;
  display: list-item;
}

#payment {
  position: absolute;
  right: 10%;
  top: 50%;
}

#card {
  background: #04303f;
  color: white;
  height: 1.3rem;
}

#place-order {
  background: #d60645;
  color: white;
  cursor: pointer;
  width: 10rem;
  font-size: 110%;
  border: 0.1rem outset rgb(6, 36, 49);
}

#place-order:hover {
  background-color: rgb(31, 10, 50);
  color: rgb(230, 124, 97);
  transition-duration: 0.7s;
}
</style>
