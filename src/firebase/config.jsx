import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXu1vXEo4OUldkPa0T4i5uSvYiPI7uy7E',
  authDomain: 'where-s-waldo-9fd46.firebaseapp.com',
  projectId: 'where-s-waldo-9fd46',
  storageBucket: 'where-s-waldo-9fd46.appspot.com',
  messagingSenderId: '1080708654005',
  appId: '1:1080708654005:web:94a75a700ca561b49feffc',
  measurementId: 'G-75YMD58SR1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

const firestore = firebase.firestore();
const auth = firebase.auth();

export { auth, firestore, timestamp };
