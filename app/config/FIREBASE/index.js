import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyC2GhlGDpZyNNU23ImGvlmPmN0nHCAIRUY",
  authDomain: "uass-82bf8.firebaseapp.com",
  databaseURL: "https://uass-82bf8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uass-82bf8",
  storageBucket: "uass-82bf8.appspot.com",
  messagingSenderId: "473838773360",
  appId: "1:473838773360:web:47eb80c50a434c6b2f80b5"
});

const FIREBASE = firebase;

export default FIREBASE;