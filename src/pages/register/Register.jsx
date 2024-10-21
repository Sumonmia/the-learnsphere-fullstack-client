import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../../shared/Navbar";
import { Helmet } from "react-helmet-async";



const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        // const name = event.target.name.value;
        // console.log(name);

        const form = new FormData(event.currentTarget);
        // console.log(form);

        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        const phone = form.get("phone");
        const address = form.get("address");

        console.log(name, photo, email, password, phone, address);

        createUser(email, password, name, photo, phone, address)
            .then((result) => {
                // console.log(result.user)
                handleUserProfile(name, photo);
                toast.success("User Register Successful", {
                    position: "top-right",
                })
                navigate("/login");
            })
            .catch((error) => {
                console.log(error)
            })
    };

    const handleUserProfile = (name, photo) => {
        const profile = { displayName: name, photoURL: photo }

        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <Helmet>
                <title>LearnSphere | Register</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <div className="hero bg-gray-600 rounded-md shadow-md">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-slate-500 w-full max-w-sm shrink-0 shadow-2xl">
                            <h1 className="text-center py-3 text-xl font-bold">Register Your Account!</h1>
                            <form onSubmit={handleRegister} className="card-body py-2">
                                <div className="form-control flex flex-row justify-between">
                                    <label className="label" >
                                        <span className="label-text">Name: </span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex flex-row justify-between">
                                    <label className="label">
                                        <span className="label-text">Photo URL: </span>
                                    </label>
                                    <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
                                </div>

                                <div className="form-control flex flex-row justify-between">
                                    <label className="label">
                                        <span className="label-text">Email: </span>
                                    </label>
                                    <input type="email" name="email" placeholder="email@gmail.com" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex flex-row justify-between">
                                    <label className="label">
                                        <span className="label-text">Phone Number: </span>
                                    </label>
                                    <input type="text" name="phone" placeholder="01xxxxxxxxx" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex flex-row justify-between">
                                    <label className="label">
                                        <span className="label-text">Address: </span>
                                    </label>
                                    <input type="text" name="address" placeholder="City, Street" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex flex-row justify-between">
                                    <label className="label">
                                        <span className="label-text">Password: </span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                                </label> */}
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent">Register</button>
                                </div>
                            </form>
                            <div>
                                <div className="mb-5 text-center text-xs">
                                    Already Have an Account? &nbsp;
                                    <Link to="/login" className="text-blue-500 underline hover:text-blue-600" > Signin here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
