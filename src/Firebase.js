import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1A8ffzAVhZXf1FGbXcwpxLCdAp4LJpDM",
  authDomain: "tic-tok-clone-5acbc.firebaseapp.com",
  projectId: "tic-tok-clone-5acbc",
  storageBucket: "tic-tok-clone-5acbc.appspot.com",
  messagingSenderId: "872191604686",
  appId: "1:872191604686:web:b1ebc85eef4db3782f1d9f",
  measurementId: "G-79XZDX5JBG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
