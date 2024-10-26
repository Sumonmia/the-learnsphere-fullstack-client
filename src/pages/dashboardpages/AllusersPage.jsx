import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaEdit, FaUserShield } from "react-icons/fa";


const AllusersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isAdminToggleModalOpen, setIsAdminToggleModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    displayName: "",
    phoneNumber: "",
    photoURL: "",
    address: "",
  });

  // Fetch all users from the backend
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/userList"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Load users when the component mounts
  }, []);


  // Toggle admin status
  const handleToggleAdmin = async () => {
    try {
      console.log({ selectedUser });
      const updatedUser = { ...selectedUser, isAdmin: !selectedUser?.isAdmin };

      await fetch(
        `http://localhost:5000/userList/${selectedUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );
      fetchUsers(); // Reload users after update
      setIsAdminToggleModalOpen(false);
    } catch (error) {
      console.error("Error toggling admin status:", error);
    }
  };

  // Open the edit modal with the user's current details
  const openEditModal = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.displayName || "",
      phone: user.phoneNumber || "",
      photo: user.photoURL || "",
      address: user.address || "",
    });
    setIsEditModalOpen(true);
  };

  // Update user info
  const handleUpdate = async () => {
    try {
      const updatedUser = {
        ...selectedUser,
        displayName: formData.name,
        phoneNumber: formData.phone,
        photoURL: formData.photo,
        address: formData.address,
      };

      await fetch(
        `http://localhost:5000/userList/${selectedUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );
      fetchUsers(); // Reload users after update
      setIsEditModalOpen(false);
      toast.success("User Edited Successfully", {
        position: "top-right",
      })
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };


  const handleClickedSetUserOrAdminRole = (user) => {
    setSelectedUser(user);
    setIsAdminToggleModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>LS | All Users</title>
      </Helmet>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">All Users: {users.length}</h2>

        <div className="w-14 lg:min-w-full">
          <table className="table-auto bg-gray-300 ">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-left">
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Image</th>
                <th className="py-2 px-4 border">Role</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{user?.displayName || "N/A"}</td>
                  <td className="py-2 px-4 border">{user?.email}</td>
                  <td className="py-2 px-4 border">
                    <img
                      src={user?.photoURL || "https://via.placeholder.com/50"}
                      alt="user"
                      className="w-10 rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4 border">
                    {user.isAdmin ? "Admin" : "User"}
                  </td>
                  <td className="py-2 px-4 border text-green-500">
                    Active
                    {/* {user.isBlocked ? "Blocked" : "Active"} */}
                  </td>
                  <td className="py-2 px-4 border">
                    <button
                      onClick={() => handleClickedSetUserOrAdminRole(user)}
                      className={`mr-2 p-2 rounded-full text-white ${user.isAdmin ? "bg-green-500" : "bg-blue-500"
                        } ${user.email === "admin@gmail.com"
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                        }`}
                      title="Toggle Admin/User"
                      disabled={user.email === "admin@gmail.com"}
                    >
                      <FaUserShield />
                    </button>

                    <button
                      onClick={() => openEditModal(user)}
                      className="mr-2 p-2 rounded-full bg-yellow-500 text-white"
                      title="Edit User"
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-4/5 lg:w-1/2">
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
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded ml-4"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Toggle Admin Modal */}
        {isAdminToggleModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/3">
              <h3 className="text-xl mb-4">
                {selectedUser.isAdmin
                  ? "Revoke Admin Privileges?"
                  : "Grant Admin Privileges?"}
              </h3>
              <button
                onClick={handleToggleAdmin}
                className={`bg-green-500 text-white px-4 py-2 rounded`}
              >
                {selectedUser.isAdmin ? "Revoke" : "Grant"}
              </button>
              <button
                onClick={() => setIsAdminToggleModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded ml-4"
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

export default AllusersPage
