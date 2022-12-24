<script setup>
import { ref } from "vue";
import { useStore } from "../store/index.js";
import SiteModal from "./SiteModal.vue";
import axios from "axios";

const showModal = ref(false);
const selectedId = ref(0);

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
      let obj = {};
      obj["id"] = movieData.id;
      obj["poster"] = movieData.poster_path;
      store.movieSelection.push(obj);
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
      let obj = {};
      obj["id"] = movieData.id;
      obj["poster"] = movieData.poster_path;
      store.movieSelection.push(obj);
    }
    store.pageNum++;
  }
}
</script>
<template>
  <div id="background-div">
    <h1 v-if="!store.movieSelection.length" id="notice">No Results</h1>
    <div id="posters-container">
      <button
        @click="openModal(movie.id)"
        class="poster-buttons"
        v-for="movie in store.movieSelection"
      >
        <img class="posters" :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
      </button>
    </div>

    <button v-if="store.pageNum > 4 && !store.searched" @click="previousTrendingPage()">
      back
    </button>
    <button
      v-if="store.movieSelection.length == 60 && !store.searched"
      @click="nextTrendingPage()"
    >
      next
    </button>

    <button
      v-if="store.searchPageNum > 1 && store.searched"
      @click="store.previousSearchPage()"
    >
      back
    </button>
    <button
      v-if="store.movieSelection.length == 20 && store.searched"
      @click="store.nextSearchPage()"
    >
      next
    </button>

    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped>
#background-div {
  background-color: #051e3e;
}

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
