import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDrA2zqMm9t6hEaRwRaYGgFQTi3cqlfb_w",
    authDomain: "gamerce-83850.firebaseapp.com",
    projectId: "gamerce-83850",
    storageBucket: "gamerce-83850.appspot.com",
    messagingSenderId: "738872731550",
    appId: "1:738872731550:web:0063d8850e7acf80ec988f"
  });

export const getFirebase = () => {return app};

export const getFriestore = () => {return firebase.firestore(app)};