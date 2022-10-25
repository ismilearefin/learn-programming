import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import Premium from '../Premium/Premium';

const Courses = () => {
    return (
        <div className='flex'>
            <CoursesMenu></CoursesMenu>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};


function CoursesMenu (){
    return(
        <div>
            <ul className="menu bg-base-100 w-24 lg:w-56 p-2  border">
  <li className="menu-title border">
    <span>Courses</span>
  </li>
  <li><Link>Item 1</Link></li>
  <hr/>
  <li><Link>Item 2</Link></li>
  <hr/>
  <li><Link>Item 1</Link></li>
  <hr/>
  <li><Link>Item 2</Link></li>
  <hr/>
  <li><Link>Item 2</Link></li>
  <hr/>
  <li><Link>Item 2</Link></li>
</ul>
        </div>
    )
}

export default Courses;