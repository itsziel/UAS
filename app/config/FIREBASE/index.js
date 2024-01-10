import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import 'firebase/compat/storage'

firebase.initializeApp({
  apiKey: "AIzaSyCiZadJG9iAK7h9xOlEhENwIBxQ8joNMdw",
  authDomain: "kampusxpert-1b0b6.firebaseapp.com",
  databaseURL: "https://kampusxpert-1b0b6-default-rtdb.firebaseio.com",
  projectId: "kampusxpert-1b0b6",
  storageBucket: "kampusxpert-1b0b6.appspot.com",
  messagingSenderId: "278588966744",
  appId: "1:278588966744:web:378ac5b4e1111e561b472d"

});

const FIREBASE = firebase;

export default FIREBASE;