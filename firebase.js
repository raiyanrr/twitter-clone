// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaVqw_RGgLO3Hd_v5QxiWTiO831a8odrI",
  authDomain: "twitter-clone2-ee8a8.firebaseapp.com",
  projectId: "twitter-clone2-ee8a8",
  storageBucket: "twitter-clone2-ee8a8.appspot.com",
  messagingSenderId: "1092477095803",
  appId: "1:1092477095803:web:4be87a025e6349b116b7de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage()