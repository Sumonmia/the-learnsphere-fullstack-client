import { Helmet } from "react-helmet-async"
import Navbar from "../shared/Navbar"
import Footer from "../shared/Footer"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryWiseCourses = () => {
    const { categoryId } = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`https://the-learnsphere-server.vercel.app/courses/${categoryId}`)
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error("Error loading courses:", error));
    }, [categoryId]);

    return (
        <>
            <Helmet>
                <title>LS | Category Courses</title>
            </Helmet>
            <Navbar />
            <div className="min-h-screen">
                <h2 className="text-2xl lg:text-4xl p-5 text-center">All the Courses of this Category is: {courses.length}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div key={course._id} className="mt-5 bg-gray-400 p-5 rounded-md shadow-lg space-y-3">
                            <h3 className="text-xl text-center">{course.title}</h3>
                            <div className="flex justify-center items-center">
                            <img src={course.image} alt={course.title} className="w-40 rounded-lg" />
                            </div>
                            <p>Price: ${course.price}</p>
                            <p>Rating: {course.rating}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );

}

export default CategoryWiseCourses
