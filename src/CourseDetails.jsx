import { Link, useLoaderData, useParams } from "react-router-dom"
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {id} = useParams();
    console.log(id);
    console.log(courseDetails);
    const { title, details,ratings,level,author_img_url, author, lession, img_url, price, student } = courseDetails;
  return (

    <div className="bg-gray-400">
        <Navbar></Navbar>

        <div className="mt-10">
        <h2 className="text-center text-lg font-bold lg:text-3xl">Details of Course: {title}</h2>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-2 p-1 lg:p-5">
            <div className="w-1/2 flex justify-center items-center mt-5">
                <img className="rounded-md w-3/4" src={img_url} alt="" />
            </div>
            <div className="w-1/2 space-y-2">
                <img className="w-1/4 rounded-full" src={author_img_url} alt="" />
                <span>Author: {author}</span>
                <p>Book Details: {details}</p>
                <p>Book Ratings: {ratings}</p>
                <p>Total Lessions: {lession}</p>
                <p>Level: {level}</p>
                <p>Student Enrolled: {student}</p>
                <p>Course Price: {price}</p>
            </div>
        </div>
        <div className="text-center">
        <Link to="/courses" className="btn btn-accent">Back to Courses</Link>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default CourseDetails
