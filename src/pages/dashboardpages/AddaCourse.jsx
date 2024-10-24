import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddaCourse = () => {

    const navigate = useNavigate();
    const handleAddCourse =(event)=>{
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const title = form.get("title");
        const category = form.get("category");
        const categoryId = form.get("categoryId");
        const image = form.get("image");
        const price = form.get("price");
        const rating = form.get("rating");

        const course = { title, category, categoryId, image, price, rating }
        console.log(course);

        fetch("http://localhost:5000/courses",{

            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(course),
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            if(data.insertedId){
                toast.success("Course Added successfully",{
                    position: "top-right",
                });
            }
            event.target.reset();
            navigate("/dashboard/allcourses");
        })
    }

    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-slate-500 w-full max-w-md shrink-0 shadow-2xl">
                    <h1 className="text-center py-3 text-xl font-bold">Add a New Course</h1>
                    <form onSubmit={handleAddCourse} className="card-body py-2">
                        <div className="form-control flex flex-row justify-between">
                            <label className="label" >
                                <span className="label-text">Course Title: </span>
                            </label>
                            <input type="text" name="title" placeholder="JS Beginer Guide" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex flex-row justify-between">
                            <label className="label" >
                                <span className="label-text">Course Category: </span>
                            </label>
                            <input type="text" name="category" placeholder="Web Development" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex flex-row justify-between">
                            <label className="label" >
                                <span className="label-text">Category Id: </span>
                            </label>
                            <input type="text" name="categoryId" placeholder="01" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex flex-row justify-between">
                            <label className="label" >
                                <span className="label-text">Course Image URL: </span>
                            </label>
                            <input type="text" name="image" placeholder="Course Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex flex-row justify-between">
                            <label className="label" >
                                <span className="label-text">Course Price: </span>
                            </label>
                            <input type="text" name="price" placeholder="BDT..." className="input input-bordered" required />
                        </div>
                        <div className="form-control flex flex-row justify-between">
                            <label className="label" >
                                <span className="label-text">Course Rating: </span>
                            </label>
                            <input type="text" name="rating" placeholder="4.9" className="input input-bordered" required />
                        </div>

                        <div className="form-control items-center my-3">
                            <button className="btn w-40 ">Add Course</button>
                        </div>
                    </form>
                    <div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddaCourse
