import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Main from "../Layout/Main/Main";
import Login from "../Login/Login";
import Premium from "../Courses/Premium/Premium";
import Signup from "../Signup/Signup";
import ShowCourses from "../Courses/ShowCourses/ShowCourses";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path : '/courses',
          element : <Courses></Courses>,
          children:[
            {
              path:'/courses',
              element:<ShowCourses></ShowCourses>
            },
            {
              path:'/courses/premium',
              element:<Premium></Premium>
            }
          ]

        },
        {
          path: '/faq',
          element : <Faq></Faq>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    },
  ]);