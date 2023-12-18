import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCA-EIwRDqFTAxKWsJWVo22BJeqJw0YNV0",
  authDomain: "terserah-39dcb.firebaseapp.com",
  projectId: "terserah-39dcb",
  storageBucket: "terserah-39dcb.appspot.com",
  messagingSenderId: "441085815985",
  appId: "1:441085815985:web:a459eb26880d0bee434690",
  databaseURL: "https://terserah-39dcb-default-rtdb.firebaseio.com/"
});

const FIREBASE = firebase;

export default FIREBASE;