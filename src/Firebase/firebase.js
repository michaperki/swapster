// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8PP-uO443YjgCZIJLUHaBfcfLgsyCQpk",
  authDomain: "swapster-37e6e.firebaseapp.com",
  projectId: "swapster-37e6e",
  storageBucket: "swapster-37e6e.appspot.com",
  messagingSenderId: "971801885533",
  appId: "1:971801885533:web:ac0023ce37fdf4730086b4",
  measurementId: "G-PBKENXBMXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;