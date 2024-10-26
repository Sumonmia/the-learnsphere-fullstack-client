import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddCategory = () => {

    const navigate = useNavigate();
    const handleAddCategory =(event)=>{
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const categoryId = form.get("categoryId");
        const category = form.get("category");
        const image = form.get("image");


        const newCategory = { categoryId, category, image }
        // console.log(newCategory);

        fetch(`https://the-learnsphere-server.vercel.app/courseCategories`,{

            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newCategory),
        })
        .then((res)=> res.json())
        .then((data)=>{
            // console.log(data);
            if(data.insertedId){
                toast.success("Category Added successfully",{
                    position: "top-right",
                });
            }
            event.target.reset();
            navigate("/dashboard/allcategories");
        })
    }
    return (
        <>
        <Helmet>
            <title>LS | Add Category</title>
        </Helmet>
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-white">
                    <h1 className="text-center py-3 text-xl font-bold">Add a New CouCategory</h1>
                    <form onSubmit={handleAddCategory} className="card-body py-2">
                        <div className="form-control flex flex-row justify-between">
                            <label className="label" >
                                <span className="label-text">Category Id: </span>
                            </label>
                            <input type="text" name="categoryId" placeholder="01" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex flex-row justify-between">
                            <label className="label" >
                                <span className="label-text">Course Category: </span>
                            </label>
                            <input type="text" name="category" placeholder="Web Development" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex flex-row justify-between">
                            <label className="label" >
                                <span className="label-text">Category Image URL: </span>
                            </label>
                            <input type="text" name="image" placeholder="Category Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control items-center my-3">
                            <button className="btn w-40 ">Add Category</button>
                        </div>
                    </form>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddCategory
