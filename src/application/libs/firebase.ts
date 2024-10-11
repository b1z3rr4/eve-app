import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNfcZwflD9mpCfFut0rezS4kzT0kjcw2Q",
    authDomain: "dtaf-652b7.firebaseapp.com",
    projectId: "dtaf-652b7",
    storageBucket: "dtaf-652b7.appspot.com",
    messagingSenderId: "825173271348",
    appId: "1:825173271348:web:0acd99ff0cdba118da3b61",
    measurementId: "G-D6E7ZFZ592"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
