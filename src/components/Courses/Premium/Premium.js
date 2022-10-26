import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";


const ref = React.createRef();


const Premium = () => {
    const main = useLoaderData();
    // console.log(main);
    const {name,dis,thum_img,id} = main;
    return (
        <div className='flex justify-center '>
            <div className='w-10/12 pt-5'>
                <div className=' w-full flex justify-end'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className="flex gap-4 justify-center btn btn-outline">Generate Pdf <FaDownload /></button>}
                    </Pdf>
                </div>
                <div ref={ref}>
                    <div className='text-4xl font-bold my-4'>
                        <h1>{name}</h1>
                    </div>
                    <div className='flex justify-center '>
                        <img src={thum_img} className='rounded-lg shadow-lg' alt='thum-img' />
                    </div>
                    <div>
                        <h3 className=' md:text-2xl my-4'>
                            {dis}
                        </h3>
                    </div>
                </div>
                <Link to={`/courses/premuim/${id}`} className='btn my-4'>Get Premium Access</Link>
            </div>
        </div>
    );
};

export default Premium;