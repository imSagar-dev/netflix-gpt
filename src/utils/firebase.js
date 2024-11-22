// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLyY-pNkEeeY3kDgITwWGjsP_ZUxe-_dw",
  authDomain: "netflixgpt-8c513.firebaseapp.com",
  projectId: "netflixgpt-8c513",
  storageBucket: "netflixgpt-8c513.firebasestorage.app",
  messagingSenderId: "960842073643",
  appId: "1:960842073643:web:b08eaa0892c4cb4fad8c6e",
  measurementId: "G-NRW92LB0JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();