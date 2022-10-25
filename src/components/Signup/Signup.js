import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";

const Signup = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SIGN UP NOW!</h1>
            <p className="py-6">Sign-up to stay connected with us and get premium access to all our courses.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">User Name</span>
                </label>
                <input type="text" placeholder="user name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Profile picture</span>
                </label>
                <input type="text" placeholder="URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                    <p  className="label-text-alt">Already have an account? <Link to='/login' className="label-text-alt link link-hover">Login</Link></p>
                </label>
                </div>
                <div className="form-control mt-4">
                <button className="btn btn-primary">Sign Up</button>
                <div className='flex justify-center gap-3 mt-3'>
                <FaGoogle className='text-2xl'></FaGoogle>
                <FaGithub className='text-2xl'></FaGithub>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;