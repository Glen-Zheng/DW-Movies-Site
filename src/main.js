import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCartShopping,
  faCircleArrowLeft,
  faHouse,
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { initializeApp } from "firebase/app";



library.add(
  faCartShopping,
  faHouse,
  faCircleArrowLeft,
  faGithub,
  faFacebook,
  faEnvelope,
  faTwitter,
  faInstagram,
  faMagnifyingGlass,
);

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf2x7-HD2AWgQt0wKaEBcnTjHskFd0-uQ",
  authDomain: "ics4u-a4920.firebaseapp.com",
  projectId: "ics4u-a4920",
  storageBucket: "ics4u-a4920.appspot.com",
  messagingSenderId: "164080373061",
  appId: "1:164080373061:web:3fd6aa282328d9be8e022c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .use(createPinia())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
