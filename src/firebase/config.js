import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6zYki-cPGTjjcGZYzPMAv-WrUKQAw1eQ",
    authDomain: "lockbox-recipes.firebaseapp.com",
    projectId: "lockbox-recipes",
    storageBucket: "lockbox-recipes.appspot.com",
    messagingSenderId: "282242571567",
    appId: "1:282242571567:web:238d2d9b35e595de7555da"
  };


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }