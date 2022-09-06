
// import * as firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCYReKuIuR9xVTATj3mW0p0WKCUYHrT40o",
    authDomain: "disney-clone-ec409.firebaseapp.com",
    projectId: "disney-clone-ec409",
    storageBucket: "disney-clone-ec409.appspot.com",
    messagingSenderId: "827980185303",
    appId: "1:827980185303:web:e4e770f22014bd45b27a92",
    measurementId: "G-MLR1L1BEHR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export { app };
