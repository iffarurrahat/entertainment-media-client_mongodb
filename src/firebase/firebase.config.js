// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiN4tGHigjKswqHb0NXnWpM0a4_JEDNVw",
    authDomain: "entertainment-media-26908.firebaseapp.com",
    projectId: "entertainment-media-26908",
    storageBucket: "entertainment-media-26908.appspot.com",
    messagingSenderId: "955822020304",
    appId: "1:955822020304:web:857c1d7b7beb438b6ef0d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app;