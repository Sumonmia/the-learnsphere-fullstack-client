import { useLoaderData } from "react-router-dom"
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"
import CourseCard from "./CourseCard";
import { Helmet } from "react-helmet-async";


const AllCourses = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <>
    <Helmet>
      <title>LearnSphere | Courses</title>
    </Helmet>
      <div>
        <Navbar></Navbar>
        <h2 className="text-center font-bold mt-10 lg:text-3xl">All the Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          {
            courses.map((singleCourse) => (
              <CourseCard key={singleCourse._id} course={singleCourse} ></CourseCard>
            ))
          }
        </div>
        <div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default AllCourses;
