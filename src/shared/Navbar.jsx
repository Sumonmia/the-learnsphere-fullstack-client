import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"
import { MdSpaceDashboard } from "react-icons/md";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div>
      <div className="navbar bg-gray-400 rounded-md shadow-md m-0 p-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2">
              <Link to="/" ><button className="btn btn-accent" >Home</button></Link>
              <NavLink to="/courses" ><button className="btn btn-accent" >Courses</button></NavLink>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Link to="/"><img src="courses-img.jpg" className="hidden md:block rounded-full w-14" alt="logo" /></Link>
            <span className="text-lg lg:text-2xl font-bold text-red-600">LearnSphere</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <Link to="/" ><button className="btn btn-accent" >Home</button></Link>
            <NavLink to="/courses" ><button className="btn btn-accent" >Courses</button></NavLink>
          </ul>
        </div>
        {
          user ? (
            <div className="navbar-end gap-2">
              <div className="text-green-800">{user.displayName}</div>
              <Link to="/dashboard" title="Dashboard">
                <MdSpaceDashboard className="w-10 h-10 mr-5" />
              </Link>
            </div>
          ) : (
            <div className="navbar-end">
              <Link to="/login" className="btn btn-warning">Login/Register</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
