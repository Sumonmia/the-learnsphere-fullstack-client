import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const CourseCard = ({ course }) => {
  console.log(course);

  const { course_id, title, author, img_url, price, student } = course;
  return (
    <>
    <Helmet>
      <title>LearnSphere | Courses</title>
    </Helmet>
      <div className="mt-5 bg-gray-400 p-5 rounded-md shadow-lg">
        <h2 className="font-bold">{title}</h2>
        <div class="flex justify-center items-center">
          <img src={img_url} className="w-1/2 my-3 rounded-md" alt="Course" />
        </div>

        <span className="font-bold my-2">Author: {author}</span>
        <div className="flex justify-between mt-5">
          <span>Enrolled Student: {student}</span>
          <span>Price: {price}</span>
        </div>
        <Link to={`/courses/${course_id}`} className="btn btn-accent mt-5" >Course Details</Link>
      </div>
    </>
  );
}

export default CourseCard;
