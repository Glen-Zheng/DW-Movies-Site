import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAf2x7-HD2AWgQt0wKaEBcnTjHskFd0-uQ",
  authDomain: "ics4u-a4920.firebaseapp.com",
  projectId: "ics4u-a4920",
  storageBucket: "ics4u-a4920.appspot.com",
  messagingSenderId: "164080373061",
  appId: "1:164080373061:web:3fd6aa282328d9be8e022c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore(app);
const storage = getStorage();

export { auth, firestore, storage };