// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzbozs47J8Ge813xQxVYtXP-xmYdlFUrM",
  authDomain: "auth-livethecode.firebaseapp.com",
  projectId: "auth-livethecode",
  storageBucket: "auth-livethecode.appspot.com",
  messagingSenderId: "110044048666",
  appId: "1:110044048666:web:e3b5365287d603355650a3",
  measurementId: "G-FGTKCVVDMS"
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };