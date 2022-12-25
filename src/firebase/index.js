import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAf2x7-HD2AWgQt0wKaEBcnTjHskFd0-uQ",
    authDomain: "ics4u-a4920.firebaseapp.com",
    projectId: "ics4u-a4920",
    storageBucket: "ics4u-a4920.appspot.com",
    messagingSenderId: "164080373061",
    appId: "1:164080373061:web:3fd6aa282328d9be8e022c"
  };
  
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  const firestore = getFirestore();
  const storage = getStorage();

  export { auth, firestore, storage }
