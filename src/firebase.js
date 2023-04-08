import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from"firebase/storage"
const firebaseConfig = {
    // apiKey:import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    // authDomain:import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_ADMAIN,
    // projectId:import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket:import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKETS,
    // messagingSenderId:import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    // appId:import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
    apiKey: "AIzaSyCxXX6UpV6paRO5HWfJHKIYdfhhQFCYbVY",
  authDomain: "linked-722a3.firebaseapp.com",
  projectId: "linked-722a3",
  storageBucket: "linked-722a3.appspot.com",
  messagingSenderId: "595279621204",
  appId: "1:595279621204:web:0c6d5e6fa20479865cd1c1",

   
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db= getFirestore(app) ;
  const provider = new GoogleAuthProvider();
  const storage = getStorage();

  
  export {auth,db,provider,storage};
  