import { useLoaderData } from "react-router-dom"


const CourseCategoryCard = () => {

    const loadedCategories = useLoaderData();
    console.log(loadedCategories);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-300 mt-10 gap-4 text-center">
        {/* {loadedCategories.map((loadedCategory)=>(
            <div key={loadedCategory.categoryId}>
                <h2>
                    {loadedCategory.category}
                </h2>
            </div>
        ))} */}
        A Single Category
    </div>
  )
}

export default CourseCategoryCard
