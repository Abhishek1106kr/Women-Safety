// This file is used to initialize the firebase app with the firebase configuration


import { initializeApp } from "firebase/app";
// my firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqg1Y7M3Dr2zJwfPDFOnjLNtb6o7-yQDw",
    authDomain: "womensafetyapp-e9e17.firebaseapp.com",
    projectId: "womensafetyapp-e9e17",
    storageBucket: "womensafetyapp-e9e17.firebasestorage.app",
    messagingSenderId: "202305221458",
    appId: "1:202305221458:web:b13718b81d90a05104c08b",
    measurementId: "G-1MBSPW21K8"
  };
  const app=initializeApp(firebaseConfig);
  export default app;
