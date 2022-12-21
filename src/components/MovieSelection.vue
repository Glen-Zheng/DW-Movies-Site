<script setup>
import { ref } from "vue";
import { useStore } from "../store/index.js";
import SiteModal from "./SiteModal.vue";

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
store.moviesOutputted = false;
if (store.moviesOutputted == false) {
  await store.selection();
  store.outputtedDone();
}
console.log(store.pageNum);
</script>
<template>
  <div id="background-div">
    <div id="posters-container">
      <button
        @click="openModal(movie.id)"
        class="poster-buttons"
        v-for="movie in store.movieSelection"
      >
        <img class="posters" :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
      </button>
    </div>

    <button v-if="store.pageNum > 4" @click="store.previousPage()">back</button>
    <button @click="store.nextPage()">next</button>

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
