      import firebase from 'firebase'  
      
        const firebaseConfig = {
    apiKey: "AIzaSyAdmcCLVFdHPIZtbyI1RysVi6MZ1d2tO9w",
    authDomain: "fir-5274e.firebaseapp.com",
    projectId: "fir-5274e",
    storageBucket: "fir-5274e.appspot.com",
    messagingSenderId: "67539206146",
    appId: "1:67539206146:web:cfc408989b13a7ccec271b"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig)
  const db=firebaseapp.firestore();
  const auth=firebase.auth()
  export {db,auth}