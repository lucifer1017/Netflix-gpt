// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrtVx0Wl4RG-mYVp0Uy_WOK0JGR-Vx3UE",
    authDomain: "netflixgpt-52051.firebaseapp.com",
    projectId: "netflixgpt-52051",
    storageBucket: "netflixgpt-52051.appspot.com",
    messagingSenderId: "246949602043",
    appId: "1:246949602043:web:82e132dd40f3f6732e065e",
    measurementId: "G-11G9XL96PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();