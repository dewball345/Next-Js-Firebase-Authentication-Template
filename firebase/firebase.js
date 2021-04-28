import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCx40wFlTICIwMJUQL9YqbGdW4blfbFBh4",
    authDomain: "react-auth-testo.firebaseapp.com",
    projectId: "react-auth-testo",
    storageBucket: "react-auth-testo.appspot.com",
    messagingSenderId: "944115301618",
    appId: "1:944115301618:web:1aff837c2718e1ce9ba46b"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export const auth = firebase.auth();
export const db = firebase.database();