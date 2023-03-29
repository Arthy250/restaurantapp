// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqDuniOYVNMj87gIzIT056_at14EHlLe8",
  authDomain: "restaurant-2c6d8.firebaseapp.com",
  projectId: "restaurant-2c6d8",
  storageBucket: "restaurant-2c6d8.appspot.com",
  messagingSenderId: "933078533928",
  appId: "1:933078533928:web:b505fc02fdf94b5dacb21d",
  measurementId: "G-GV57972CT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default firebaseConfig;