
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FiEdit } from "react-icons/fi"; // Importing react-icon
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    phoneNumber: "",
    photoURL: "",
    address: "",
  });

  // Update user info
  const handleUpdate = async () => {
    try {
      const updatedUser = {
        ...user,
        displayName: formData.name,
        phoneNumber: formData.phone,
        photoURL: formData.photo,
        address: formData.address,
      };

      // Make API call to update user information
      const response = await fetch(
        `http://localhost:5000/userList/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user information");
      }

      // Close the modal upon successful update
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating user:", error);
      alert("There was an error updating the user. Please try again.");
    }
  };

  // Open the edit modal with the user's current details
  const handleOpenEditModal = () => {
    setFormData({
      name: user.displayName || "",
      phone: user.phoneNumber || "",
      photo: user.photoURL || "",
      address: user.address || "",
    });
    setIsEditModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>
          LS | Profile
        </title>
      </Helmet>
      <div className="p-6 bg-gray-300 rounded-lg shadow-lg relative">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-36 h-36 object-cover rounded-full shadow-md"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {user?.displayName}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
          <p className="text-green-500 font-semibold">Active</p>
        </div>

        <div className="mt-6 w-full">
          <h3 className="text-xl font-bold text-gray-700">Profile Details</h3>
          <hr />
          <ul className="mt-3 text-gray-600 space-y-2">
            <li>
              <strong>Role:</strong> {user?.isAdmin ? "Admin" : "User"}
            </li>
            <li>
              <strong>Email:</strong> {user?.email}
            </li>
            <li>
              <strong>Phone:</strong> {user?.phoneNumber || "N/A"}
            </li>
            <li>
              <strong>Address:</strong> {user?.address || "N/A"}
            </li>
            {/* <hr />
            <li>
              <strong>Unique ID:</strong> {user?.userId}
            </li> */}
          </ul>
        </div>

        {/* Edit Button with React Icon */}

        <button
          className="absolute top-4 right-4 text-dark hover:text-white transition-transform transform hover:scale-105"
          onClick={handleOpenEditModal}
        >
          <FiEdit size={24} />
        </button>


        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/3">
              <h3 className="text-xl mb-4">Edit User</h3>
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
                <label className="block text-sm font-medium">Photo URL:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.photo}
                  onChange={(e) =>
                    setFormData({ ...formData, photo: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
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
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white p-2 rounded mr-2"
              >
                Update
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
      </div>
    </>
  );
}

export default UserProfile
