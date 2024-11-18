// // import firebase from "firebase/compat/app";
// // import "firebase/compat/auth";
// // import "firebase/compat/firestore";


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // import firebase from "./firebase";

// // my firebase API

// const firebaseConfig = {
//     apiKey: "AIzaSyAdmcCLVFdHPIZtbyI1RysVi6MZ1d2tO9w",
//     authDomain: "fir-5274e.firebaseapp.com",
//     projectId: "fir-5274e",
//     storageBucket: "fir-5274e.appspot.com",
//     messagingSenderId: "67539206146",
//     appId: "1:67539206146:web:cfc408989b13a7ccec271b"
//   };


//   // Initialize Firebase
//   // const app = initializeApp(firebaseConfig);
//   // const auth = getAuth(app);
  
//   // export { auth };
//   const app = firebase.initializeApp(firebaseConfig);
//   const db = app.firestore();
//   const auth = firebase.auth();
  
//   export { db, auth };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdmcCLVFdHPIZtbyI1RysVi6MZ1d2tO9w",
  authDomain: "fir-5274e.firebaseapp.com",
  projectId: "fir-5274e",
  storageBucket: "fir-5274e.appspot.com",
  messagingSenderId: "67539206146",
  appId: "1:67539206146:web:cfc408989b13a7ccec271b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
  