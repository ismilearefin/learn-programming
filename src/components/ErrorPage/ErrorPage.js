import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { FaAngleDoubleLeft} from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/optical-lens-technology-background-purple-blue-gradient_53876-124678.jpg?w=740&t=st=1666792215~exp=1666792815~hmac=119c86b770bf7c7c1549ec1e02aeee0341239efb657caf9ff79299137d9c2957")` }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div>
                        <MagnifyingGlass
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperClass="MagnifyingGlass-wrapper"
                        glassColor = '#c0efff'
                        color = '#e15b64'
                        />
                        </div>
                    <h1 className="mb-5 text-8xl font-bold">404</h1>
                    <p className="mb-5 text-5xl">PAGE NOT FOUND</p>
                    <Link to='/' className="btn btn-primary"><FaAngleDoubleLeft className='mr-1'></FaAngleDoubleLeft>Home</Link>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default ErrorPage;