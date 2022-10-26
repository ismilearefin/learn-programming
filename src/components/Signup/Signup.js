import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../ContextApi/AuthProvider/AuthProvider';
import { useState } from 'react';

const Signup = () => {
    const [error,seterror] = useState('');
    const navigate = useNavigate();
    
    const {signupWithEmailPass,GooglesignInWithPopup,updateuserProfile,signinwithGithub} = useContext(AuthContext);
// sign in with email & password    
    function handlesubmit(e){
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        signupWithEmailPass(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            console.log(user);
            form.reset();
            updateuserProfile(name,url);
            navigate('/');
        })
        .catch((error) => {
            seterror(error.message);
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
            seterror(errorMessage);
            
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
        seterror('')
      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        seterror(errorMessage)
      });
}


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SIGN UP NOW!</h1>
            <p className="py-6">Sign-up to stay connected with us and get premium access to all our courses.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlesubmit} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input type="text" name='name' placeholder="Full name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Profile picture</span>
                </label>
                <input type="text" name='url' placeholder="URL" className="input input-bordered" />
                </div>
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
                    <p  className="label-text-alt">Already have an account? <Link to='/login' className="label-text-alt link link-hover">Login</Link></p>
                </label>
                    <p className='text-red-600 label-text-alt'>{error}</p>
                </div>
                <div className="form-control mt-4">
                <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className='flex justify-center gap-3 mt-3'>
                <FaGoogle className='text-2xl' onClick={handleGooglesignin}></FaGoogle>
                <FaGithub className='text-2xl' onClick={handlegithubsignin}></FaGithub>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Signup;