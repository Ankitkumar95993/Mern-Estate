// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5602f.firebaseapp.com",
  projectId: "mern-estate-5602f",
  storageBucket: "mern-estate-5602f.appspot.com",
  messagingSenderId: "277974750386",
  appId: "1:277974750386:web:598eb40617836a276fa5ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);