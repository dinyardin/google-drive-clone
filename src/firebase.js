import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB-60MV1GT315GKUA6yPzomPGDJmFhKjAA",
  authDomain: "auth-development-e4af5.firebaseapp.com",
  projectId: "auth-development-e4af5",
  storageBucket: "auth-development-e4af5.appspot.com",
  messagingSenderId: "984037796609",
  appId: "1:984037796609:web:e523fb4dbd6d5efb148900",
});

export const auth = app.auth();
export default app;
