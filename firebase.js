// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq6HM4ZUfY6vxCCeKi2n0uWxIxdQjeOYQ",
  authDomain: "pantry-checker-3b437.firebaseapp.com",
  projectId: "pantry-checker-3b437",
  storageBucket: "pantry-checker-3b437.appspot.com",
  messagingSenderId: "292845041086",
  appId: "1:292845041086:web:eb55c4af05bbece0f175ef",
  measurementId: "G-HJ3ZPVNGJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}
