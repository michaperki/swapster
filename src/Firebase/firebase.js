import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

firebase.initializeApp(firebaseConfig);
