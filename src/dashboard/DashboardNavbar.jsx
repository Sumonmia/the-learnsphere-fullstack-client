import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { MdDashboard, MdSpaceDashboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoMdLogIn } from "react-icons/io";

const DashboardNavbar = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
  
    return (
      <>
        <div className="navbar border-b bg-gray-500">
          <div className="navbar-start">
            <Link
              to="/"
              className="btn btn-ghost text-2xl text-red-700 font-bold"
              title="Home"
            >
              LearnSphere
            </Link>
          </div>
          <div className="navbar-end">
            {user ? (
              <Link to="/dashboard" title="Dashboard">
                <MdSpaceDashboard className="w-10 h-10 mr-5" />
              </Link>
            ) : (
              <Link
                to="/login"
                className="font-semibold flex items-center justify-end gap-2"
              >
                Login <IoMdLogIn />
              </Link>
            )}
          </div>
        </div>
      </>
    );
}

export default DashboardNavbar
