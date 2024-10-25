import { Link, useLoaderData } from "react-router-dom";


const CourseCategories = () => {
  const loadedCategories = useLoaderData();
  // const [courses, setCourses] = useState(loadedCourses);
  console.log(loadedCategories);


  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-5">
      <h2 className="text-2xl font-bold mb-4">Total Categories: {loadedCategories.length}</h2>
      <Link to="/dashboard/addcategory" className="btn "> Add a New Category</Link>
      </div>
      <table className="min-w-full bg-gray-300 ">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-left">
            <th className="py-2 px-4 border">#</th>
            <th className="py-2 px-4 border">Category Id</th>
            <th className="py-2 px-4 border">Category</th>
          </tr>
        </thead>
        <tbody>
            {
              loadedCategories.map((loadedCategory, index)=> <tr key={loadedCategory.categoryId} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{index+1}</td>
              <td className="py-2 px-4 border">{loadedCategory.categoryId}</td>
              <td className="py-2 px-4 border">{loadedCategory.category}</td>
            </tr>)
            }
        </tbody>
      </table>

    </div>
  )
}

export default CourseCategories
