import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBQDWLX1_sDuIkYVAYCcZkjGuwMRJpOFcE",
  authDomain: "drive-clone-9da24.firebaseapp.com",
  projectId: "drive-clone-9da24",
  storageBucket: "drive-clone-9da24.appspot.com",
  messagingSenderId: "139754392370",
  appId: "1:139754392370:web:7faf2161ae08e7d774652b",
});

export const auth = app.auth();

// We could export our entire firestore as below
export const firestore = app.firestore();

//or we can export the specific collection, in this case "folders" and "files"
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export default app;
