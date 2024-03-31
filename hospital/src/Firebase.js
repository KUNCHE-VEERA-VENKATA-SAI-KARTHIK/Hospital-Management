// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_M4Ga5q4evxPSHUulKv0KcVIzKeUu1T0",
  authDomain: "hospital-fc931.firebaseapp.com",
  databaseURL: "https://hospital-fc931-default-rtdb.firebaseio.com",
  projectId: "hospital-fc931",
  storageBucket: "hospital-fc931.appspot.com",
  messagingSenderId: "667655665554",
  appId: "1:667655665554:web:518d2b0c5a34cfb9d5b34b",
  measurementId: "G-BPR1WK8R52",
  databaseURL: "https://hospital-fc931-default-rtdb.firebaseio.com"

};

// Initialize Firebase    
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
export default db;
