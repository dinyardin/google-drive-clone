import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBQDWLX1_sDuIkYVAYCcZkjGuwMRJpOFcE",
  authDomain: "drive-clone-9da24.firebaseapp.com",
  projectId: "drive-clone-9da24",
  storageBucket: "drive-clone-9da24.appspot.com",
  messagingSenderId: "139754392370",
  appId: "1:139754392370:web:7faf2161ae08e7d774652b",
});

export const auth = app.auth();
export default app;
