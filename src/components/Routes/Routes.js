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
import Privatepage from "../Courses/Privatepage/Privatepage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";

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
          loader:()=> fetch('https://my-assignment-server.vercel.app/allcourse'),
          element : <Courses></Courses>,
          children:[
            {
              path:'/courses',
              loader:()=> fetch('https://my-assignment-server.vercel.app/allcourse'),
              element:<ShowCourses></ShowCourses>
            },
            {
              path:'/courses/:id',
              loader:async ({params}) => {
                return   fetch(`https://my-assignment-server.vercel.app/course/${params.id}`)
              },
                element:<Premium></Premium>
            },
          ]
        },
        {
          path:'/courses/premuim/:id',
          loader:async ({params}) => {
            return   fetch(`https://my-assignment-server.vercel.app/course/${params.id}`)
          },
          element:<PrivateRoute><Privatepage></Privatepage></PrivateRoute>
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
        },
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);