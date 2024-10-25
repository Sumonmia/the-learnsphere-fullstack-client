import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom"
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "./provider/AuthProvider";


const CourseDetails = () => {
    const { user } = useContext(AuthContext);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const navigate = useNavigate();
    const courseDetails = useLoaderData();
    const { id } = useParams();
    console.log(id);
    console.log(user);
    // console.log(courseDetails);
    const { title, image, price, rating, category } = courseDetails;

    const [formData, setFormData] = useState({
      displayName: "",
      phoneNumber: "",
      address: "",
      title: "",
      price: "",
    });

        // handling users course purchase
        const handlePurchase = async (event) => {
            event.preventDefault();
            try {
              const purchasedUser = {
                ...user,
                displayName: formData.name,
                phoneNumber: formData.phone,
                address: formData.address,
                title: formData.title,
                price: formData.price,
              };

              console.log("Logs is:", purchasedUser);
        
              // Make API call to update user information
              const response = await fetch(
                "http://localhost:5000/userlogs",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(purchasedUser),
                }
              );
              if (!response.ok) {
                throw new Error("Failed to load user purchase information");
              }
        
              // Close the modal upon successful update
              setIsEditModalOpen(false);
            } catch (error) {
              console.error("Error updating user:", error);
              alert("There was an error updating the user. Please try again.");
            }
            toast.success("Congratulations!! You have Purchased this course",{
                position: "top-right",
            })
            navigate("/courses");
          };
        // Open the edit modal with the user's current details
        const handleOpenEditModal = () => {
            setFormData({
              name: user.displayName || "",
              phone: user.phoneNumber || "",
              address: user.address || "",
              title: courseDetails.title || "",
              price: courseDetails.price || "",
            });
            setIsEditModalOpen(true);
          };

    return (

        <div className="bg-gray-400">
            <Navbar></Navbar>

            <div className="mt-10">
                <h2 className="text-center text-lg font-bold lg:text-3xl">Details of Course: {title}</h2>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-center gap-2 p-1 lg:p-5 bg-slate-300 m-10 rounded-lg shadow-lg">
                <div className="w-1/2 flex justify-center items-center mt-5">
                    <img className="rounded-md w-3/4" src={image} alt="" />
                </div>
                <div className="w-1/2 space-y-2">
                    <p className="font-semibold">Category of this Course: {category}</p>
                    <p className="font-semibold">Course Title: {title}</p>
                    <p>Course Ratings: {rating}</p>
                    <p>Course Price: {price}</p>
                    <div className="mt-7">
                        <Link onClick={handleOpenEditModal} className="btn btn-accent mt-7">Buy Now</Link>
                    </div>
                </div>
            </div>

        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/3">
              <h3 className="text-xl mb-4">Buy this Course</h3>
              <div className="mb-4 flex justify-between gap-4 items-center">
                <label className="block text-sm font-medium">Name:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 flex justify-between gap-4 items-center">
                <label className="block text-sm font-medium">Phone:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 flex justify-between gap-4 items-center">
                <label className="block text-sm font-medium">Address:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 flex justify-between gap-4 items-center">
                <label className="block text-sm font-medium">Course Title:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 flex justify-between gap-4 items-center">
                <label className="block text-sm font-medium">Course Price:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
              <button
                onClick={handlePurchase}
                className="bg-blue-500 text-white p-2 rounded mr-2"
              >
                Proceed
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

            <Footer></Footer>
        </div>
    )
}

export default CourseDetails
