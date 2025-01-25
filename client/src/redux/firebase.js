// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API-KEY,
  authDomain: "mern-blog-351fd.firebaseapp.com",
  projectId: "mern-blog-351fd",
  storageBucket: "mern-blog-351fd.firebasestorage.app",
  messagingSenderId: "721143647573",
  appId: "1:721143647573:web:53169fdba71cf4996d73dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);