import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDdC1I6BQ7JCx4Bs4umyzbcGfn4BuKGJKU",
    authDomain: "yummymeals-9ec5a.firebaseapp.com",
    projectId: "yummymeals-9ec5a",
    storageBucket: "yummymeals-9ec5a.appspot.com",
    messagingSenderId: "226684331620",
    appId: "1:226684331620:web:d4db213630972fed396171"
};


var app = initializeApp(firebaseConfig);

// if (firebase.apps.length === 0) {
//   app = initializeApp(firebaseConfig);
// } 

export const auth = getAuth(app);
