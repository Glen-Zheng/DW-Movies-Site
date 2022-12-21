import axios from "axios";
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      movieSelection: [],
      moviesOutputted: false,
      cart: [],
      pageNum: 1,
    };
  },
  actions: {
    async selection() {
      for (let i = 0; i < 3; i++) {
        let response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day`,
          {
            params: {
              api_key: "da6aeec5bd0d488feeebd8b57deda080",
              include_adult: false,
              page: this.pageNum,
            },
          }
        );
        for (let movieData of response.data.results) {
          let obj = {};
          obj["id"] = movieData.id;
          obj["poster"] = movieData.poster_path;
          this.movieSelection.push(obj);
        }
        this.pageNum++;
      }
    },
    outputtedDone() {
      this.moviesOutputted = true;
    },
    addToCart(item) {
      if (!this.cart.includes(item)) {
        this.cart.push(item);
      }
    },
    removeFromCart(item) {
      this.cart.splice(item, 1);
    },
    emptyCart() {
      this.cart = [];
    },
    async nextPage() {
      this.movieSelection = [];
      for (let i = 0; i < 3; i++) {
        let response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day`,
          {
            params: {
              api_key: "da6aeec5bd0d488feeebd8b57deda080",
              include_adult: false,
              page: this.pageNum,
            },
          }
        );
        for (let movieData of response.data.results) {
          let obj = {};
          obj["id"] = movieData.id;
          obj["poster"] = movieData.poster_path;
          this.movieSelection.push(obj);
        }
        this.pageNum++;
      }
    },
    async previousPage() {
      this.pageNum -= 6;
      this.movieSelection = [];
      for (let i = 0; i < 3; i++) {
        let response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day`,
          {
            params: {
              api_key: "da6aeec5bd0d488feeebd8b57deda080",
              include_adult: false,
              page: this.pageNum,
            },
          }
        );
        for (let movieData of response.data.results) {
          let obj = {};
          obj["id"] = movieData.id;
          obj["poster"] = movieData.poster_path;
          this.movieSelection.push(obj);
        }
        this.pageNum++;
      }
    },
  },
});
