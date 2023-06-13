import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqQxnMzjBMTKggGX2CkKvZBpTNR8IqhjE",
    authDomain: "cs50finalproject-1abe7.firebaseapp.com",
    projectId: "cs50finalproject-1abe7",
    storageBucket: "cs50finalproject-1abe7.appspot.com",
    messagingSenderId: "884890245980",
    appId: "1:884890245980:web:7b58689410f50efde7bf99",
    measurementId: "G-0LTFVX73CN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };