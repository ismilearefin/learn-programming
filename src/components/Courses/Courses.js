import React from 'react';
import { Link, Outlet, useLoaderData} from 'react-router-dom';
// import Premium from '../Premium/Premium';

const Courses = () => {
    return (
        <div className='flex '>
            
            <CoursesMenu></CoursesMenu>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};


function CoursesMenu (){
    const allcourse = useLoaderData();
    return(
        <div className=''>
            <ul className="menu bg-base-100 w-22 h-full lg:w-56 lg:p-2 border">
  <li className="menu-title border">
    <span>Courses</span>
  </li>

  {
    allcourse.map(course => <li key={course.id}><Link to={`${course.id}`}>{course.name}</Link></li>)
  }
 
</ul>
        </div>
    )
}

export default Courses;