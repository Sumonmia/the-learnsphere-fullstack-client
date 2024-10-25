import { useState } from "react";
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

    console.log(_id);
    fetch(`http://localhost:5000/course/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

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
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-bold mb-4">Total Courses: {courses.length}</h2>
        <Link to="/dashboard/addacourse" className="btn "> Add a New Course</Link>
      </div>
        <table className="min-w-full bg-gray-300 ">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-left">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Category Id</th>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Rating</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              courses.map((course, index) => <tr key={course._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{course.title}</td>
                <td className="py-2 px-4 border">{course.category}</td>
                <td className="py-2 px-4 border">{course.categoryId}</td>
                <td className="py-2 px-4 border">
                  <img
                    src={course.image}
                    alt="Course image"
                    className="w-10 rounded-lg"
                  />
                </td>
                <td className="py-2 px-4 border">
                  {course.price}
                </td>
                <td className="py-2 px-4 border text-green-500">
                  {course.rating}
                </td>
                <td className="py-2 px-4 border">
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
  )
}

export default AllCoursesAtDashboard
