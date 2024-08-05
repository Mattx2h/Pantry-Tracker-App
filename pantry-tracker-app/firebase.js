// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJmgToT2rDf-meZlLGUDpU-KEi4wnediQ",
  authDomain: "inventory-management-aaf97.firebaseapp.com",
  projectId: "inventory-management-aaf97",
  storageBucket: "inventory-management-aaf97.appspot.com",
  messagingSenderId: "352078694317",
  appId: "1:352078694317:web:cfe4e8907de50dab018324",
  measurementId: "G-P64X519E3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export{firestore}