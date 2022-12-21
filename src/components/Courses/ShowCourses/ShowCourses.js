import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";

const ShowCourses = () => {
    const allcourses = useLoaderData();
    
    return (
        <div className='w-full p-4 md:w-auto md:p-12 md:ml-10'>
            <div className='grid lg:grid-cols-2 gap-8  '>
            {
                allcourses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
            }
            </div>
        </div>
    );
};

// Course Card Component..........

function CourseCard ({course}){
    return(
        <div  className="card w-64 lg:w-96 bg-base-100 shadow-xl">
        <><img src={course.card_img} alt="Shoes" className='hover:scale-110 transition duration-300 ease-in-out'/></>
        <div className="card-body">
            <h2 className="font-bold text-lg lg:card-title">
            {course.title}
            <div className="badge badge-secondary">Updated</div>
            </h2>
            <p>{course.card_dis}</p>
            <div className="card-actions md:justify-evenly">
            <div className="badge badge-outline">Price: ${course.price}</div> 
            <div className="badge badge-outline"><FaRegStar className='text-yellow-400 mr-1'></FaRegStar> {course.rating}</div>
            <div className="badge badge-outline">Student: {course.student}</div>
            <Link to={`${course.id}`} className="badge badge-outline">View</Link>
            </div>
        </div>
        </div>
    )
}

export default ShowCourses;