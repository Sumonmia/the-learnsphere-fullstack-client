import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa"
import { FaDeleteLeft } from "react-icons/fa6"
import { Link, useLoaderData } from "react-router-dom"


const AllCoursesAtDashboard = () => {

  const loadedCourses = useLoaderData();
  const [courses, setCourses] = useState(loadedCourses);
  // console.log(loadedCourses);

  // delete course
  const handleDeleteCourse = (_id) => {

    // console.log(_id);
    fetch(`https://the-learnsphere-server.vercel.app/course/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.deletedCount) {
          toast.success("You have Deleted a Course", {
            position: "top-right",
          });

          const remainingCourses = courses.filter((course) => course._id !== _id);
          setCourses(remainingCourses);
        }

      });
  }

  return (
    <>
      <Helmet>
        <title>LS | All Courses</title>
      </Helmet>

      <div className="flex flex-col justify-center items-center p-4">
        <div className="flex space-x-6 items-center mb-5">
          <h2 className="text-2xl font-bold mb-4">Total Courses: {courses.length}</h2>
          <Link to="/dashboard/addacourse" className="btn "> Add a Course</Link>
        </div>
        <table className="table-auto bg-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-left text-sm">
            <th className="py-2 px-2 text-center border">#</th>
              <th className="py-2 text-center border">Title</th>
              <th className="py-2 text-center border">Category</th>
              <th className="py-2 text-center border">Category Id</th>
              
              <th className="py-2 text-center border">Image</th>
              <th className="py-2 text-center border">Price</th>
              <th className="py-2 text-center border">Rating</th>
              <th className="py-2 text-center border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              courses.map((course, index) => <tr key={course._id} className="hover:bg-gray-100">
                <td className="py-2 border">{index + 1}</td>
                <td className="py-2 border">{course.title}</td>
                <td className="py-2 border">{course.category}</td>
                <td className="py-2 border">{course.categoryId}</td>
                <td className="py-2 border">
                  <img
                    src={course.image}
                    alt="Course image"
                    className="w-10 rounded-lg"
                  />
                </td>
                <td className="py-2 border">
                  {course.price}
                </td>
                <td className="py-2  border text-green-500">
                  {course.rating}
                </td>
                <td className="py-2 border">
                  <Link to={`/dashboard/editcourse/${course._id}`}>
                    <button
                      className="mr-2 p-2 rounded-full bg-yellow-500 text-white"
                      title="Edit Course"
                    >
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteCourse(course._id)}
                    className="mr-2 p-2 rounded-full bg-red-700 text-white"
                    title="Delete Course"
                  >
                    <FaDeleteLeft />
                  </button>
                </td>
              </tr>)
            }

          </tbody>
        </table>

      </div>
    </>
  )
}

export default AllCoursesAtDashboard
