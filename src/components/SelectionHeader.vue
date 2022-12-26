<script setup>
import axios from "axios";
import { useStore } from "../store";
import { ref } from "vue";

const store = useStore();

let searchItem = ref("");

const search = async () => {
  if (searchItem.value.length > 0) {
    store.searchPageNum = 1;
    store.searchItem = searchItem.value;
    store.searched = true;
    store.movieSelection = [];
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: "da6aeec5bd0d488feeebd8b57deda080",
        include_adult: false,
        query: searchItem.value,
        page: store.searchPageNum,
      },
    });
    for (let movieData of response.data.results) {
      if (movieData.poster_path) {
        store.movieSelection.push({ id: movieData.id, poster: movieData.poster_path });
      }
    }
  }
};
</script>

<template>
  <div id="background">
    <h1 id="main-title">DW Movies</h1>
    <RouterLink id="home-link" :to="{ name: 'Home' }"
      ><font-awesome-icon icon="fa-solid fa-house"
    /></RouterLink>
    <RouterLink id="login-link" :to="{ name: 'Login' }">Login</RouterLink>
    <RouterLink id="cart-link" :to="{ name: 'Cart' }">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <span id="num-cart">{{ store.cart.length }}</span>
    </RouterLink>

    <input
      id="search-bar"
      type="text"
      placeholder="Search Movie"
      v-model="searchItem"
      @keyup.enter="search()"
    />
    <button id="search-button" @click="search()">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
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
  grid-template-rows: repeat(3, fr);
  border: 0.5rem inset #c30b36;
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

#search-bar {
  margin-top: 15px;
  grid-column: 1/4;
  grid-row: 3/4;
  width: 95%;
  background: rgb(31, 10, 50);
  color: white;
  border: 0.2rem solid rgb(247, 255, 19);
  font-size: 2rem;
}

#search-button {
  margin-top: 15px;
  grid-column: 1/4;
  grid-row: 3/4;
  justify-self: end;
  width: 5%;
  background: #851e3e;
  color: rgb(174, 231, 255);
  border: 0.2rem solid rgb(247, 255, 19);
  cursor: pointer;
  font-size: 1.6rem;
}

#search-button:hover {
  background-color: rgb(31, 10, 50);
  color: rgb(230, 124, 97);
  transition-duration: 0.7s;
  transform: scale(1.07);
}
</style>
