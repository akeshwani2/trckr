// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDutQPLQHMtyWZmHSU0ZQ7Mq2xMlQ-O98s",
  authDomain: "trckr-66ba6.firebaseapp.com",
  projectId: "trckr-66ba6",
  storageBucket: "trckr-66ba6.appspot.com",
  messagingSenderId: "214520373885",
  appId: "1:214520373885:web:9feef639fd22bc0b258714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export { db, getCities };


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration


