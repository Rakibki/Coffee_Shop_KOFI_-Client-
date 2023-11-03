// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// require('dotenv').config()
// import 'dotenv/config'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPyY-1lH-1pVUwjlSnoBkmNMtaIRUXAS0",
  authDomain: "coffee-shop-kofi.firebaseapp.com",
  projectId: "coffee-shop-kofi",
  storageBucket: "coffee-shop-kofi.appspot.com",
  messagingSenderId: "687904586694",
  appId: "1:687904586694:web:95bac8427322e3a85e10c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth