import React, { createContext,  } from 'react';
import { createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword } from "firebase/auth";
import app from '../../../fairbase/firebase.config';
// import { current } from 'daisyui/src/colors';


export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    // const [user, setuser] = useState(null)


    // signUp with email & password
function signupWithEmailPass (email,password){
   return  createUserWithEmailAndPassword(auth, email, password);
}

    //Login with email & password
function loginWithEmailPass (email,password){
    return signInWithEmailAndPassword(auth, email, password)
}

    //Authentication state observer
// useEffect(()=>{
//     const unsubscribe = onAuthStateChanged(auth, currentuser => {
//         setuser(currentuser);
//     });
//     return () => unsubscribe();
// }, [])

    const value = {signupWithEmailPass, loginWithEmailPass };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;