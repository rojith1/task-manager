// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3WAn-6sKhN583addK0uRxYr3PQfpXkBU",
  authDomain: "checklist-daec6.firebaseapp.com",
  projectId: "checklist-daec6",
  storageBucket: "checklist-daec6.firebasestorage.app",
  messagingSenderId: "567726534587",
  appId: "1:567726534587:web:7e504061a870d442771e9e",
  measurementId: "G-VXRKXRGP8H"
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
