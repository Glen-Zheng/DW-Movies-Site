<script setup>
import { ref } from "vue";
import { useStore } from "../store/index.js";
import SiteModal from "./SiteModal.vue";
import axios from "axios";

const showModal = ref(false);
const selectedId = ref(0);
let genre = ref();

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const store = useStore();
if (store.moviesOutputted == false) {
  await store.selection();
  store.outputtedDone();
}

async function nextTrendingPage() {
  store.movieSelection = [];
  for (let i = 0; i < 3; i++) {
    let response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
      params: {
        api_key: "da6aeec5bd0d488feeebd8b57deda080",
        include_adult: false,
        page: store.pageNum,
      },
    });
    for (let movieData of response.data.results) {
      store.movieSelection.push({
        id: movieData.id,
        poster: movieData.poster_path,
      });
    }
    store.pageNum++;
  }
}

async function previousTrendingPage() {
  store.pageNum -= 6;
  store.movieSelection = [];
  for (let i = 0; i < 3; i++) {
    let response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
      params: {
        api_key: "da6aeec5bd0d488feeebd8b57deda080",
        include_adult: false,
        page: store.pageNum,
      },
    });
    for (let movieData of response.data.results) {
      store.movieSelection.push({
        id: movieData.id,
        poster: movieData.poster_path,
      });
    }
    store.pageNum++;
  }
}
</script>
<template>
  <div :style="[
    store.movieSelection.length <= 8
      ? { background: '#051e3e', width: '100vw', height: '100vh' }
      : { background: '#051e3e', width: '100%', height: '100%' },
  ]">
    <select id="genre-select" @change="store.chooseGenre(genre)" v-model="genre">
      <option disabled selected value>Select Genre</option>
      <option value="Trending">Trending</option>
      <option value="Action">Action</option>
      <option value="Documentary">Documentary</option>
      <option value="Family">Family</option>
      <option value="History">History</option>
      <option value="Horror">Horror</option>
      <option value="Romance">Romance</option>
      <option value="Science Fiction">Science Fiction</option>
      <option value="Thriller">Thriller</option>
    </select>
    <h1 v-if="!store.movieSelection.length" id="notice">No Results</h1>
    <div id="posters-container">
      <button @click="openModal(movie.id)" class="poster-buttons" v-for="movie in store.movieSelection">
        <img class="posters" :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
      </button>
    </div>

    <button class="page-buttons" v-if="store.pageNum > 4 && !store.searched" @click="previousTrendingPage()">
      Back
    </button>
    <button class="page-buttons" v-if="store.movieSelection.length == 60 && !store.searched"
      @click="nextTrendingPage()">
      Next
    </button>

    <button class="page-buttons" v-if="store.searchPageNum > 1 && store.searched" @click="store.previousSearchPage()">
      Back
    </button>
    <button class="page-buttons" v-if="store.movieSelection.length == 20 && store.searched"
      @click="store.nextSearchPage()">
      Next
    </button>

    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped>
#posters-container {
  padding-top: 1.5rem;
}

.posters {
  aspect-ratio: 2/3;
  width: 12rem;
  border-radius: 2rem;
  border: 2px outset rgb(136, 216, 25);
}

.poster-buttons {
  margin: 1rem 0.5rem 1rem 0.5rem;
  background-color: white;
  border: none;
  padding: 0px;
  cursor: pointer;
  border-radius: 2rem;
  height: 18.2rem;
}

.poster-buttons:hover {
  background: rgb(59, 9, 63);
  transition-duration: 1s;
}

.posters:hover {
  opacity: 0.4;
  transition-duration: 0.15s;
}

#notice {
  padding-top: 2rem;
  color: white;
  font-family: "Henny Penny", cursive;
}

#genre-select {
  grid-column: 1/2;
  grid-row: 3/4;
  aspect-ratio: 15/1;
  font-size: 2rem;
  border: 0.2rem solid #f9c802;
  background: rgb(31, 10, 50);
  color: white;
  display: flex;
  justify-content: start;
  position: relative;
  left: 2rem;
  top: 0.9rem;
  font-family: "Brawler", serif;
}

.page-buttons {
  width: 50px;
  font-family: "Roboto Slab", serif;
  background-color: white;
  color: rgb(95, 69, 5);
  border: 2px inset #d98d01;
  margin-bottom: 2px;
}

@media (width <=1280px) and (width > 900px) {
  .posters {
    aspect-ratio: 2/3;
    width: 10rem;
    border-radius: 1rem;
    border: 1px outset rgb(136, 216, 25);
  }

  .poster-buttons {
    margin: 1rem 0.9rem 1rem 0.9rem;
    background-color: white;
    border: none;
    padding: 0px;
    cursor: pointer;
    border-radius: 1rem;
    height: 15.1rem;
  }
}

@media (width <=900px) {
  .posters {
    aspect-ratio: 2/3;
    width: 6rem;
    border-radius: 1rem;
    border: 1px outset rgb(136, 216, 25);
  }

  .poster-buttons {
    margin: 2rem 0.5rem 2rem 0.5rem;
    background-color: white;
    border: none;
    padding: 0px;
    cursor: pointer;
    border-radius: 1rem;
    height: 9.1rem;
  }
}
</style>
