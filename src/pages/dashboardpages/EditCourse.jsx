import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom"


const EditCourse = () => {

    const loadedCourse = useLoaderData();
    console.log(loadedCourse);
    const navigate = useNavigate();

    const handleEditCourse =(event)=>{
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const title = form.get("title");
        const category = form.get("category");
        const categoryId = form.get("categoryId");
        const image = form.get("image");
        const price = form.get("price");
        const rating = form.get("rating");

        const updatedCourse = { title, category, categoryId, image, price, rating }
        console.log(updatedCourse);

        fetch(`http://localhost:5000/course/${loadedCourse._id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updatedCourse),
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            if(data.modifiedCount){
                toast.success("Course Updated Successfully", {
                    position: "top-right",
                });
                navigate("/dashboard/allcourses");
            }
        });
    }

  return (
    <div>
        <Helmet>
            <title>LS | Edit Course</title>
        </Helmet>
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-white">
            <h1 className="text-center py-3 text-xl font-bold">Edit this Course</h1>
            <form onSubmit={handleEditCourse} className="card-body py-2">
                <div className="form-control flex flex-row justify-between">
                    <label className="label" >
                        <span className="label-text">Course Title: </span>
                    </label>
                    <input type="text" name="title" defaultValue={loadedCourse.title} className="input input-bordered" required />
                </div>
                <div className="form-control flex flex-row justify-between">
                    <label className="label" >
                        <span className="label-text">Course Category: </span>
                    </label>
                    <input type="text" name="category" defaultValue={loadedCourse.category} className="input input-bordered" required />
                </div>
                <div className="form-control flex flex-row justify-between">
                    <label className="label" >
                        <span className="label-text">Category Id: </span>
                    </label>
                    <input type="text" name="categoryId" defaultValue={loadedCourse.categoryId} className="input input-bordered" required />
                </div>
                <div className="form-control flex flex-row justify-between">
                    <label className="label" >
                        <span className="label-text">Course Image URL: </span>
                    </label>
                    <input type="text" name="image" defaultValue={loadedCourse.image} className="input input-bordered" required />
                </div>
                <div className="form-control flex flex-row justify-between">
                    <label className="label" >
                        <span className="label-text">Course Price: </span>
                    </label>
                    <input type="text" name="price" defaultValue={loadedCourse.price} className="input input-bordered" required />
                </div>
                <div className="form-control flex flex-row justify-between">
                    <label className="label" >
                        <span className="label-text">Course Rating: </span>
                    </label>
                    <input type="text" name="rating" defaultValue={loadedCourse.rating} className="input input-bordered" required />
                </div>

                <div className="form-control items-center my-3">
                    <button className="btn w-40 ">Save Changes</button>
                </div>
            </form>
            <div>
            </div>
        </div>
    </div>
</div>
  )
}

export default EditCourse
