// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcVV_74FD524jDSyLqJBazWozlKnzz58o",
  authDomain: "blog-007-411518.firebaseapp.com",
  projectId: "blog-007-411518",
  storageBucket: "blog-007-411518.appspot.com",
  messagingSenderId: "421789584415",
  appId: "1:421789584415:web:ee8e0844654816aba1992a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Get a list of cities from your database
