import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../ContextApi/AuthProvider/AuthProvider';

const Login = () => {
const {loginWithEmailPass,GooglesignInWithPopup,signinwithGithub} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || '/'
//Sign in existing user
function handlelogin (e){
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmailPass(email,password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        navigate(from, {replace : true});
        console.log(user)
        form.reset();
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
}


// google sign in function
function handleGooglesignin(){
    GooglesignInWithPopup()
    .then((result) => {
        const user = result.user;
        console.log(user)
        
        }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        
        });
}
// github signin function
function handlegithubsignin(){
signinwithGithub()
.then((result) => {
    // The signed-in user info.
    const user = result.user;
    // ...
    console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login to stay connected with us and get premium access to the course.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                    <p  className="label-text-alt">create a new account? <Link to='/signup' className="label-text-alt link link-hover">Sign-up</Link></p>
                </label>
                </div>
                <div className="form-control mt-4">
                <button className="btn btn-primary">Login</button>
                <div className='flex justify-center gap-3 mt-3'>
                <FaGoogle className='text-2xl' onClick={handleGooglesignin}></FaGoogle>
                <FaGithub className='text-2xl' onClick={handlegithubsignin}></FaGithub>
                </div>
                </div>
                
            </form>
            </div>
        </div>
        </div>
    );
};

export default Login;