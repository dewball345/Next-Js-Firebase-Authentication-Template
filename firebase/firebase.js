import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "enter-api-key",
    authDomain: "enter-auth-domain",
    projectId: "enter-project-id",
    storageBucket: "enter-storage-bucket",
    messagingSenderId: "enter-messenger-id",
    appId: "enter-app-id"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export const auth = firebase.auth();
export const db = firebase.database();