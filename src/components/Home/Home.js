import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/abstract-techno-background-with-connecting-lines_1048-5570.jpg?w=740&t=st=1666650207~exp=1666650807~hmac=72e1dfa19ee596138465c358702015e9e8ebfd8015396dd6e530b06318805688")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Learn Programing with us</h1>
            <p className="mb-5">Programming languages are the reason every online service that we use today exists. Their number is very large, so you might ask yourself: which programming languages are the most worth learning and sought-after by the companies in 2022?</p>
            <Link to='/courses' className="btn btn-primary gap-2">Our Courses <FaArrowRight></FaArrowRight></Link>
            </div>
        </div>
        </div>
    );
};

export default Home;