// import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState, useContext, createContext } from 'react'
import { auth } from './firebase'
// import { app, auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

const UserContext = createContext()
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    };

    const logout = () => {
        return signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);

        });
        return () => unsubscribe();
    },
        [])

    return (
        <UserContext.Provider

            value={{ user, createUser, signIn, googleSignIn, logout }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {

    return useContext(UserContext)
} 
