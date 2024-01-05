import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCiZadJG9iAK7h9xOlEhENwIBxQ8joNMdw",
  authDomain: "kampusxpert-1b0b6.firebaseapp.com",
  projectId: "kampusxpert-1b0b6",
  storageBucket: "kampusxpert-1b0b6.appspot.com",
  messagingSenderId: "278588966744",
  appId: "1:278588966744:web:378ac5b4e1111e561b472d"
};

const app = initializeApp(firebaseConfig);
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
const analytics = getAnalytics(app);

export{firebase};