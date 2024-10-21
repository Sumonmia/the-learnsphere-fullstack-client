import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {
    FaUser,
    FaUsers,
    FaEnvelope,
    FaSignOutAlt,
    FaPenAlt,
} from "react-icons/fa";
import { PiBooks } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";

const DashboardSidebarContent = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log({ user })

    const handleLogout = () => {
        logOut();
        navigate("/");
    };

    return (
        <div className="p-4  bg-gray-400">
            {/* User Profile Info */}
            <div className="flex flex-col lg:flex-col items-start gap-2">
                <img
                    src={user?.photoURL}
                    alt="User Profile"
                    className="w-16 rounded-full"
                />
                <span>{user?.displayName}</span>
                <span className="text-xs">{user?.email}</span>
            </div>
            <hr className="my-4" />

            {/* Sidebar Links */}
            <nav className="flex flex-col gap-4">
                {/* Profile Link */}
                <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                        isActive ? "text-blue-600" : "text-gray-600 hover:text-white"
                    }
                >
                    <FaUser className="inline mr-2" />
                    Profile
                </NavLink>


                {/* Admin Access routes */}
                {
                    user?.isAdmin && (
                        <>
                            <NavLink
                                to="/dashboard/allUsers"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600"
                                        : "text-gray-600 hover:text-white"
                                }
                            >
                                <FaUsers className="inline mr-2" />
                                All Users
                            </NavLink>
                            <NavLink
                                to="/dashboard/allCourses"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600"
                                        : "text-gray-600 hover:text-white"
                                }
                            >
                                <PiBooks className="inline mr-2" />
                                All Courses
                            </NavLink>
                            <NavLink
                                to="/dashboard/allCategories"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600"
                                        : "text-gray-600 hover:text-white"
                                }
                            >
                                <TbCategory className="inline mr-2" />
                                All Categories
                            </NavLink>
                        </>
                    )
                }
                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="text-red-600 text-sm hover:underline flex items-center"
                >
                    <FaSignOutAlt className="inline mr-2" />
                    Logout
                </button>
            </nav>
        </div>
    );

}

export default DashboardSidebarContent
