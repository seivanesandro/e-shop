import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyC1ZdfUOTTfRe8OeMnAZ3scMvY_HdKqSFw',
    authDomain: 'eshop-2ac9b.firebaseapp.com',
    projectId: 'eshop-2ac9b',
    storageBucket: 'eshop-2ac9b.appspot.com',
    messagingSenderId: '797983237841',
    appId: '1:797983237841:web:4a908c3740e1e8668507f0',
    measurementId: 'G-XBRYPSREBD'
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

/* const apikey = process.env.REACT_APP_API_KEY;
const authDomain =
    process.env.REACT_APP_AUTHDOMAIN;
const projectId = process.env.REACT_APP_PROJECTID;
const storageBucket =
    process.env.REACT_APP_STORAGEBUCKET;
const messagingSenderId =
    process.env.REACT_APP_MESSAGINGSENDERID;
const appId = process.env.REACT_APP_APPID;
const measurementId =
    process.env.REACT_APP_MEASUREMENNTID;

const firebaseConfigtest = {
    apiKey: `${apikey}`,
    authDomain: `${authDomain}`,
    projectId: `${projectId}`,
    storageBucket: `${storageBucket}`,
    messagingSenderId: `${messagingSenderId}`,
    appId: `${appId}`,
    measurementId: `${measurementId}`
}; */
