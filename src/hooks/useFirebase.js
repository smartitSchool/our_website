import { useEffect, useState } from "react";
import initFirebase from "../Pages/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, updateProfile } from "firebase/auth";





initFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // Auth
    const auth = getAuth();


    // providers
    const googleProvider = new GoogleAuthProvider();


    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribe();
    }, [])

    // User register function
    const registerUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
            
    }

        // set user's name
        const updateDisplayName = (name) => {
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
        }


    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
            
    }


    // logout user
    const logout = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {
                setError(error);
            });
    }

    const test = 'siam'

    return ({
        user,
        setUser,
        error,setError,
        registerUser,
        loginUser,
        logout,
        updateDisplayName,
        test

    })
}

export default useFirebase;