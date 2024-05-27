import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP7cjz2g4GWSFVZHeKvPxEFYn7fo-7LS4",
  authDomain: "chrome-b348f.firebaseapp.com",
  projectId: "chrome-b348f",
  storageBucket: "chrome-b348f.appspot.com",
  messagingSenderId: "176448390273",
  appId: "1:176448390273:web:0a79275438acf79a103980",
  measurementId: "G-PR9DXMHJNH",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };
