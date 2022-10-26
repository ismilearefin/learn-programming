import React, { createContext, useEffect, useState,  } from 'react';
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../../fairbase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true);


    // signUp with email & password
function signupWithEmailPass (email,password){
   return  createUserWithEmailAndPassword(auth, email, password);
}

    //Login with email & password
function loginWithEmailPass (email,password){
    return signInWithEmailAndPassword(auth, email, password);
}

    //SignIN with Google
function GooglesignInWithPopup(){
    return signInWithPopup(auth, provider);
}

    // Authentication state observer
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentuser => {
        setuser(currentuser);
        setloading(false);
    });
    return () => unsubscribe();
}, [])

//update Profile
function updateuserProfile(name,url){
    updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: url
    }).then(() => {
        // Profile updated!
        // ...
        }).catch((error) => {
        // An error occurred
        // ...
        });
    
}
// deleteuser
function signOutuser (){
    return signOut(auth);
}


    const value = {
        user,
        loading,
        signupWithEmailPass, 
        loginWithEmailPass,
        GooglesignInWithPopup,
        updateuserProfile,
        signOutuser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;