import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom"



const CourseCategoryCard = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://the-learnsphere-server.vercel.app/courseCategories`)
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error loading categories:", error));
    }, []);

    return (

        <div className="bg-gray-300 mt-10 rounded-md">
            <h2 className="text-2xl lg:text-4xl p-5 text-center">Course Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 p-7 gap-4 text-center">
            {categories.map((category) => (
                <div key={category.categoryId} className=" bg-slate-400 rounded-md shadow-lg ">
                    <div className="flex justify-center items-center p-5">
                    <img src={category.image} alt={category.category} className="w-24 rounded-lg"/>
                    </div>
                    <h2 className="text-2xl mt-2">{category.category}</h2>
                    <Link to={`/courseCategories/${category.categoryId}`} className="btn btn-accent my-5">View Courses</Link>
                </div>
            ))}
        </div>
        </div>

    );
}

export default CourseCategoryCard
