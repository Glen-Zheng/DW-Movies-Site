<script setup></script>

<template>
  <div id="container">
    <h1 id="title">Your Cart</h1>
    <RouterLink id="purchase" :to="{ name: 'Purchase' }"><font-awesome-icon id="purchase-img"
        icon="fa-solid fa-circle-arrow-left" /></RouterLink>
    <RouterLink id="checkout" :to="{ name: 'Checkout' }">Proceed To Checkout</RouterLink>
  </div>
</template>

<style scoped>
#container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1rem groove rgb(34, 2, 64);
  position: absolute;
  top: 0;
}

#title {
  background-color: #70002f;
  padding-top: 1rem;
  color: rgb(9, 196, 230);
  font-size: 6rem;
  font-family: "Henny Penny", cursive;
  height: 15%;
  text-shadow: 2px 3px #d4af37;
}

#purchase {
  height: 10%;
  border: 2px solid #d4af37;
  font-size: 4.6rem;
  font-weight: bold;
  color: #d98d01;
  background: rgb(34, 2, 64);
}

#purchase:hover {
  background-color: rgb(9, 196, 230);
  transition-duration: 0.4s;
  color: rgb(20, 6, 65);
  font-size: 5rem;
}

#checkout {
  text-decoration: none;
  color: #d98d01;
  background: rgb(34, 2, 64);
  font-size: 3.4rem;
  font-family: "Xanh Mono", monospace;
  font-weight: bold;
  border-right: 2px solid #d4af37;
  border-left: 2px solid #d4af37;
  border-bottom: 2px solid #d4af37;
}

#checkout:hover {
  text-decoration: underline;
  font-size: 3.6rem;
  transition-duration: 0.4s;
  background-color: rgb(9, 196, 230);
  color: rgb(20, 6, 65);
}
</style>
