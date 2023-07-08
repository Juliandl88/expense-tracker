// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
//Agrego Firestore
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYCGnFPbwmCBHgxpRgPna4NKXspivg1Cs",
  authDomain: "expense-tracker-c264b.firebaseapp.com",
  projectId: "expense-tracker-c264b",
  storageBucket: "expense-tracker-c264b.appspot.com",
  messagingSenderId: "358046185301",
  appId: "1:358046185301:web:819ba81865f88fb41aa1dc"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
//Inicializo la base de datos
// Inicializar Firebase
export const db = getFirestore(app);