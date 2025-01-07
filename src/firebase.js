// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdgnmgnzdg dK0uRxYr3PQf",
  authDomain: "chapp.com",
  projectId: "chec6",
  storageBucket: "chetorage.app",
  messagingSenderId: "567726534587",
  appId: "1:56:web71e9e",
  measurementId: "GH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
