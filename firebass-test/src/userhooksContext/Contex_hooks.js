import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,
    signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, } from "firebase/auth";
import app from '../Firebass/Firebass.init';

const auth = getAuth(app)
export const authContext = createContext()

const Contex_hooks = ({children}) => {
const [user, setUser] = useState({});


    const Ragister_funtion = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const chang = onAuthStateChanged(auth, curent => {
            setUser(curent)
        })
        return () => {
            chang();
        }
    }, []);


    const logout = () => {
        return signOut(auth)
    }
    const google_popu_login = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const authinfo = {user, Ragister_funtion,SignIn, logout, google_popu_login}
    return (
        <div>
            <authContext.Provider value={authinfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default Contex_hooks;