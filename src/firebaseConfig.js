import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8qRuG8ALW1Rl_s7YMP9SPCmzbdamArp4",
    authDomain: "myfirstfirebaseproject-29d14.firebaseapp.com",
    projectId: "myfirstfirebaseproject-29d14",
    storageBucket: "myfirstfirebaseproject-29d14.appspot.com",
    messagingSenderId: "363168715094",
    appId: "1:363168715094:web:6d681eae324a96573e86f7",
    measurementId: "G-CTJK5X0XXQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();

  export {auth, db};


