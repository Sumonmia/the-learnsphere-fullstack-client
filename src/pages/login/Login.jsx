import { Link, useLocation, useNavigate } from "react-router-dom"
import Navbar from "../../shared/Navbar"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";



const Login = () => {

  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location in the login page:", location);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    console.log(form);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Login Successful", {
          position: "top-right",
        })
        navigate(location?.state ? location.state : "/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error("You Don't have an Acoount! Please Register",{
          position: "top-right",
        })
        navigate("/register");
      })
  }


  return (
    <>
    <Helmet>
      <title>LearnSphere | Login</title>
    </Helmet>
      <div>
        <Navbar></Navbar>
        <div className="hero bg-gray-700 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-slate-600 w-full max-w-sm shrink-0 shadow-2xl">
              <h1 className="text-center py-5 text-xl font-bold">Login to Your Account!</h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Login</button>
                </div>
              </form>
              <div>
                <div className="mb-5 text-center text-xs">
                  Don't Have an Account? &nbsp;
                  <Link to="/register" className="text-blue-500 underline hover:text-blue-600" > Register here</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
