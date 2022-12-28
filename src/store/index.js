import axios from "axios";
import { defineStore } from "pinia";
import { firestore } from "../firebase/index.js";
import { collection, getDocs } from "firebase/firestore";

export const useStore = defineStore("store", {
  state: () => {
    return {
      movieSelection: [],
      moviesOutputted: false,
      cart: [],
      pageNum: 1,
      searchItem: "movie",
      searchPageNum: 1,
      searched: false,
    };
  },
  actions: {
    async selection() {
      this.searched = false;
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
          this.movieSelection.push({
            id: movieData.id,
            poster: movieData.poster_path,
          });
        }
        this.pageNum++;
      }
    },
    outputtedDone() {
      this.moviesOutputted = true;
    },
    addToCart(poster, title) {
      let item = {};

      if (!this.cart.some((item) => item.title === title)) {
        item["title"] = title;
        item["poster"] = poster;
        this.cart.push(item);
      }
    },
    removeFromCart(item) {
      this.cart.splice(item, 1);
    },
    emptyCart() {
      this.cart = [];
    },
    async nextSearchPage() {
      this.searchPageNum++;
      this.movieSelection = [];
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: "da6aeec5bd0d488feeebd8b57deda080",
            include_adult: false,
            query: this.searchItem,
            page: this.searchPageNum,
          },
        }
      );
      for (let movieData of response.data.results) {
        if (movieData.poster_path) {
          this.movieSelection.push({
            id: movieData.id,
            poster: movieData.poster_path,
          });
        }
      }
    },
    async previousSearchPage() {
      this.searchPageNum--;
      this.movieSelection = [];
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: "da6aeec5bd0d488feeebd8b57deda080",
            include_adult: false,
            query: this.searchItem,
            page: this.searchPageNum,
          },
        }
      );
      for (let movieData of response.data.results) {
        if (movieData.poster_path) {
          this.movieSelection.push({
            id: movieData.id,
            poster: movieData.poster_path,
          });
        }
      }
    },
    async chooseGenre(genre) {
      //done using the firebase docs, https://firebase.google.com/docs/firestore/query-data/get-data in the "get all documents in a collection"
      this.searched = false;
      this.pageNum = 1;
      this.movieSelection = [];
      switch (genre) {
        case "trending":
          this.selection();
          break;
        case "action":
          const action = await getDocs(collection(firestore, "Action"));
          action.forEach((doc) => {
            if (doc.data().poster) {
              this.movieSelection.push({
                id: doc.data().id,
                poster: doc.data().poster,
              });
            }
          });
          break;
        case "documentary":
          const documentary = await getDocs(
            collection(firestore, "Documentary")
          );
          documentary.forEach((doc) => {
            if (doc.data().poster) {
              this.movieSelection.push({
                id: doc.data().id,
                poster: doc.data().poster,
              });
            }
          });
          break;
        case "family":
          const family = await getDocs(collection(firestore, "Family"));
          family.forEach((doc) => {
            if (doc.data().poster) {
              this.movieSelection.push({
                id: doc.data().id,
                poster: doc.data().poster,
              });
            }
          });
          break;
        case "history":
          const history = await getDocs(collection(firestore, "History"));
          history.forEach((doc) => {
            if (doc.data().poster) {
              this.movieSelection.push({
                id: doc.data().id,
                poster: doc.data().poster,
              });
            }
          });
          break;
        case "horror":
          const horror = await getDocs(collection(firestore, "Horror"));
          horror.forEach((doc) => {
            if (doc.data().poster) {
              this.movieSelection.push({
                id: doc.data().id,
                poster: doc.data().poster,
              });
            }
          });
          break;
        case "romance":
          const romance = await getDocs(collection(firestore, "Romance"));
          romance.forEach((doc) => {
            if (doc.data().poster) {
              this.movieSelection.push({
                id: doc.data().id,
                poster: doc.data().poster,
              });
            }
          });
          break;
        case "scifi":
          const scifi = await getDocs(collection(firestore, "Science Fiction"));
          scifi.forEach((doc) => {
            if (doc.data().poster) {
              this.movieSelection.push({
                id: doc.data().id,
                poster: doc.data().poster,
              });
            }
          });
          break;
        case "thriller":
          const thriller = await getDocs(collection(firestore, "Thriller"));
          thriller.forEach((doc) => {
            if (doc.data().poster) {
              this.movieSelection.push({
                id: doc.data().id,
                poster: doc.data().poster,
              });
            }
          });
          break;
      }
    },
  },
});
