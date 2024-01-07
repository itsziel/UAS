import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCK772aGvtYRLksi8x8qOz3-8YKy7T6aTE",
  authDomain: "kampusxpert-897b4.firebaseapp.com",
  projectId: "kampusxpert-897b4",
  storageBucket: "kampusxpert-897b4.appspot.com",
  messagingSenderId: "603411801098",
  appId: "1:603411801098:web:49d989525d7872b06f6bf3",
  databaseURL: "https://kampusxpert-897b4-default-rtdb.firebaseio.com/"

});

const FIREBASE = firebase;

export default FIREBASE;