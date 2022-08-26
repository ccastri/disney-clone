
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCYReKuIuR9xVTATj3mW0p0WKCUYHrT40o",
    authDomain: "disney-clone-ec409.firebaseapp.com",
    projectId: "disney-clone-ec409",
    storageBucket: "disney-clone-ec409.appspot.com",
    messagingSenderId: "827980185303",
    appId: "1:827980185303:web:e4e770f22014bd45b27a92",
    measurementId: "G-MLR1L1BEHR"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage, app };
