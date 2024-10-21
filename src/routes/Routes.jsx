import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AllCourses from "../pages/AllCourses";
import CourseDetails from "../CourseDetails";
import PrivateRoute from "./PrivateRoute";
import { HelmetProvider } from "react-helmet-async";
import DashboradLayout from "../layout/DashboradLayout";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <HomePage></HomePage>,
        },
        {
            path: "/courses",
            element: (
              <PrivateRoute>
                <AllCourses></AllCourses>
              </PrivateRoute>
            ),
            loader: ()=> fetch(`https://bootcamp-courseselling-web-server.vercel.app/courses`),
        },
        {
          path: "/courses/:id",
          element: <CourseDetails></CourseDetails>,
          loader: ({params})=> fetch(`https://bootcamp-courseselling-web-server.vercel.app/courses/${params.id}`),
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboradLayout></DashboradLayout>,
      children: [

      ],
    },
  ]);

  export default routes;