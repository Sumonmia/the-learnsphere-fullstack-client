import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const CourseCategories = () => {
  const loadedCategories = useLoaderData();
  // const [courses, setCourses] = useState(loadedCourses);
  // console.log(loadedCategories);

  return (
    <>
      <Helmet>
        <title>
          LS | All Categories
        </title>
      </Helmet>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="flex space-x-6 items-center mb-5">
          <h2 className="text-md lg:text-2xl font-bold mb-4">Total Categories: {loadedCategories.length}</h2>
          <Link to="/dashboard/addcategory" className="btn text-sm lg:text-md"> Add a New Category</Link>
        </div>
        <table className="table-auto bg-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Category Id</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Category Image</th>
            </tr>
          </thead>
          <tbody>
            {
              loadedCategories.map((loadedCategory, index) => <tr key={loadedCategory.categoryId} className="hover:bg-gray-100">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{loadedCategory.categoryId}</td>
                <td className="py-2 px-4 border">{loadedCategory.category}</td>
                <td className="py-2 px-4 border">
                  <img
                    src={loadedCategory.image}
                    alt="Course image"
                    className="w-10 rounded-lg"
                  />
                </td>
              </tr>)
            }
          </tbody>
        </table>

      </div>
    </>
  )
}

export default CourseCategories
