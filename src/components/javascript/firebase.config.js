import firebase from 'firebase/app';
import 'firebase/firestore';
import database from 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyA3dWN1eCdgw23YTLu6e4smzhWWKxiX8Rc",
  authDomain: "newbee-aa72d.firebaseapp.com",
  projectId: "newbee-aa72d",
  storageBucket: "newbee-aa72d.appspot.com",
  messagingSenderId: "234613834095",
  appId: "1:234613834095:web:d09b5ffc021b258477e89a",
  measurementId: "G-VG9PZG2SNZ"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.database()

export default db;