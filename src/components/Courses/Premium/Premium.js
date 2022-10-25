import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Premium = () => {
    const main = useLoaderData();
    console.log(main);
    const {name,dis,thum_img,id} = main;
    return (
        <div className='flex justify-center '>
            <div className='w-10/12 pt-5'>
                <div className='text-4xl font-bold my-4'>
                    <h1>{name}</h1>
                </div>
                <div className='flex justify-center '>
                    <img src={thum_img} className='rounded-lg shadow-lg' alt='thum-img' />
                </div>
                <div>
                    <h3 className='text-2xl my-4'>
                        {dis}
                    </h3>
                </div>
                <Link to={`/courses/premuim/${id}`} className='btn my-4'>Premium Access</Link>
            </div>
        </div>
    );
};

export default Premium;