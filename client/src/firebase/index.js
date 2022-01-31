import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: 'AIzaSyB62oh4XmyytRjYu5Q_RPXZcSLYGMjxvxU',
    authDomain: 'matcha-42-cca6a.firebaseapp.com',
    projectId: 'matcha-42-cca6a',
    storageBucket: 'matcha-42-cca6a.appspot.com',
    messagingSenderId: '711470915255',
    appId: '1:711470915255:web:47e90a36dea2e605a97732',
    measurementId: 'G-1N8CD032X5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
