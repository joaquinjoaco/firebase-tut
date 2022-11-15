import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyCGHQWcOspl-JKf_b-EO6ebsLivb_8axtk",
     authDomain: "fir-test-67029.firebaseapp.com",
     projectId: "fir-test-67029",
     storageBucket: "fir-test-67029.appspot.com",
     messagingSenderId: "927526178189",
     appId: "1:927526178189:web:36fbda50b4d0f495d881c4",
     measurementId: "G-3YX1KZHJQK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();