import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-351fd.firebaseapp.com",
  projectId: "mern-blog-351fd",
  storageBucket: "mern-blog-351fd.appspot.com", 
  messagingSenderId: "721143647573",
  appId: "1:721143647573:web:53169fdba71cf4996d73dc"
};

export const app = initializeApp(firebaseConfig);
