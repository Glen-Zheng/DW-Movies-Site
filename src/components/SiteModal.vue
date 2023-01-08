<script setup>
import { ref } from "vue";
import { useStore } from "../store/index.js";
import axios from "axios";

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const store = useStore();

let runtimeHours = ref();
let runtimeMinutes = ref();
let specificMovie = ref();
let credits = ref();

specificMovie.value = await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
  params: {
    api_key: "da6aeec5bd0d488feeebd8b57deda080",
    append_to_response: "videos",
    include_adult: false,
  },
});
credits.value = await axios.get(
  `https://api.themoviedb.org/3/movie/${props.id}/credits`,
  {
    params: {
      api_key: "da6aeec5bd0d488feeebd8b57deda080",
      include_adult: false,
    },
  }
);
runtimeHours.value = Math.floor(specificMovie.value.data.runtime / 60);
runtimeMinutes.value = specificMovie.value.data.runtime % 60;
</script>
<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button id="close-button" @click="emits('toggleModal')">X</button>
        <div
          id="modal-content"
          :style="[
            specificMovie.data.overview.split(' ').length > 130
              ? { top: '0' }
              : { top: '4.5%' },
          ]"
        >
          <h1 id="movie-title">
            {{ specificMovie.data.title }}
          </h1>
          <p id="movie-tagline">{{ specificMovie.data.tagline }}</p>
          <img
            id="movie-poster"
            :src="`https://image.tmdb.org/t/p/w500${specificMovie.data.poster_path}`"
          />
          <p id="movie-overview">
            {{ specificMovie.data.overview }}
          </p>
          <ul id="movie-genre">
            <li
              v-if="specificMovie.data.genres.length"
              v-for="genre in specificMovie.data.genres"
            >
              {{ genre.name }}
            </li>
          </ul>
          <p id="movie-rating">{{ specificMovie.data.vote_average }}/10</p>
          <p id="movie-runtime">{{ runtimeHours }} h {{ runtimeMinutes }} m</p>
          <p id="movie-release">{{ specificMovie.data.release_date }}</p>
          <p id="movie-revenue">Revenue: ${{ specificMovie.data.revenue }}</p>
          <ul>
            <li
              id="movie-cast"
              v-for="actor in [0, 1, 2]"
              v-if="credits.data.cast.length >= 3"
            >
              {{ credits.data.cast[actor].name }}
            </li>
          </ul>
          <button
            id="purchase"
            @click="
              store.addToCart(specificMovie.data.poster_path, specificMovie.data.title)
            "
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #000000ac;
  z-index: 10;
}

.modal-outer-container .modal-inner-container {
  background-color: #f2a515;
  width: 50%;
  height: 70%;
  position: relative;
  border: 0.1rem solid white;
}

.modal-outer-container .modal-inner-container #close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #f2a515;
  font-weight: bold;
  font-size: 1.7rem;
  color: #451e3e;
  cursor: pointer;
}

#modal-content {
  display: grid;
  grid-template-columns: 40% 1fr 1fr 1fr;
  grid-template-rows: repeat(7, fr);
  align-items: center;
  justify-content: center;
  position: relative;
  top: 4.5%;
  font-family: "Lora", serif;
  font-size: 1.1rem;
  margin-right: 0.75%;
}

#movie-poster {
  border-radius: 5px;
  grid-row: 1/7;
  grid-column: 1/2;
  width: 90%;
  aspect-ratio: 2/3;
  max-width: 90%;
  margin-left: 1rem;
  border: 0.2rem outset #ffffff;
}

#movie-revenue {
  grid-row: 5/6;
  grid-column: 3/4;
  place-self: center;
}

#movie-rating {
  grid-row: 5/6;
  grid-column: 2/3;
  justify-self: center;
}

#movie-runtime {
  grid-row: 4/5;
  grid-column: 4/5;
  justify-self: center;
}

#movie-release {
  grid-row: 4/5;
  grid-column: 3/4;
  justify-self: center;
}

#movie-overview {
  grid-row: 3/4;
  grid-column: 2/5;
  justify-self: center;
  margin: 0;
  text-align: center;
  margin-bottom: 3%;
  font-size: 1.25rem;
  line-height: 1.25;
}

#movie-genre {
  grid-row: 4/5;
  grid-column: 2/3;
  place-self: center;
}

#movie-title {
  grid-row: 1/2;
  grid-column: 2/5;
  justify-self: center;
  font-family: "Unbounded", cursive;
  font-size: 2.3rem;
  text-align: center;
  text-shadow: 2px 3px #2b5081;
  /* margin-top: 2%; */
  margin-bottom: 0.5%;
}

#movie-tagline {
  grid-row: 2/3;
  grid-column: 2/5;
  align-self: start;
  justify-self: center;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5%;
  text-shadow: 1px 2px rgb(95, 15, 91);
}

#movie-cast {
  grid-row: 5/6;
  grid-column: 4/5;
  place-self: center;
}

ul {
  list-style-type: circle;
}

#purchase {
  grid-column: 1/5;
  grid-row: 6/7;
  position: relative;
  top: 95%;
  width: 15%;
  text-align: center;
  place-self: center;
  padding: 3px;
  box-shadow: 0 4px rgb(199, 58, 58);
  border-radius: 0.5rem;
  aspect-ratio: 4/1;
  font-family: "Carter One", cursive;
  font-size: 2rem;
  background: #451e3e;
  color: #c7594b;
  cursor: pointer;
  min-width: fit-content;
}

#purchase:hover {
  background: rgb(3, 0, 8);
}

#purchase:active {
  background: rgb(3, 0, 8);
  box-shadow: 0 3px rgb(87, 4, 4);
  transform: translateY(2px);
}

@media (width<=1280px) {
  .modal-outer-container .modal-inner-container {
    background-color: #f2a515;
    width: 70%;
    height: 65%;
    position: relative;
    border: 0.1rem solid white;
  }

  #movie-title {
    grid-row: 1/2;
    grid-column: 2/5;
    justify-self: center;
    font-family: "Unbounded", cursive;
    font-size: 2.15rem;
    text-align: center;
    text-shadow: 1px 2px #2b5081;
    /* margin-top: 3%; */
    margin-bottom: 0.5%;
  }

  #movie-overview {
    grid-row: 3/4;
    grid-column: 2/5;
    justify-self: center;
    margin: 0;
    text-align: center;
    margin-bottom: 3%;
    font-size: 1.15rem;
    line-height: 1.25;
  }

  #modal-content {
    display: grid;
    grid-template-columns: 40% 1fr 1fr 1fr;
    grid-template-rows: repeat(7, fr);
    align-items: center;
    justify-content: center;
    position: relative;
    top: 4.5%;
    font-family: "Lora", serif;
    font-size: 1rem;
    margin-right: 0.75%;
  }
}

@media (width>1280px) and (width<=1550px) {
  .modal-outer-container .modal-inner-container {
    background-color: #f2a515;
    width: 60%;
    height: 65%;
    position: relative;
    border: 0.1rem solid white;
  }

  #movie-title {
    grid-row: 1/2;
    grid-column: 2/5;
    justify-self: center;
    font-family: "Unbounded", cursive;
    font-size: 2.2rem;
    text-align: center;
    text-shadow: 1px 2px #2b5081;
    /* margin-top: 3%; */
    margin-bottom: 0.5%;
  }

  #movie-overview {
    grid-row: 3/4;
    grid-column: 2/5;
    justify-self: center;
    margin: 0;
    text-align: center;
    margin-bottom: 3%;
    font-size: 1.18rem;
    line-height: 1.25;
  }

  #modal-content {
    display: grid;
    grid-template-columns: 40% 1fr 1fr 1fr;
    grid-template-rows: repeat(7, fr);
    align-items: center;
    justify-content: center;
    position: relative;
    top: 4.5%;
    font-family: "Lora", serif;
    font-size: 1.08rem;
    margin-right: 0.75%;
  }
}
</style>
