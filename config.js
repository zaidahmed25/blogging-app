import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyCSkVkGzvJk8DUcD6Yjaqz2Cm5y-tx0_HE",
    authDomain: "blogging-app-67555.firebaseapp.com",
    projectId: "blogging-app-67555",
    storageBucket: "blogging-app-67555.appspot.com",
    messagingSenderId: "847216009694",
    appId: "1:847216009694:web:ce7fd6d532e28f16837d4f",
    measurementId: "G-3JP3ELMEB8"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
