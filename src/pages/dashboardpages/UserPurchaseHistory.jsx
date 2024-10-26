import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const UserPurchaseHistory = () => {

    const {user} = useContext(AuthContext);
    console.log("User:", user);
    const loadedHistories = useLoaderData();
    console.log("Purchased User: ", loadedHistories);

    const navigate = useNavigate();

    const handlePayment = () =>{
        toast.success("Your payment successfull! Thank You.", {
            position: "top-right",
        })
        navigate("/dashboard")
    } 

  return (
    <>
    <Helmet>
        <title>
            LS | User History
        </title>
    </Helmet>
    <div className="mt-10 bg-slate-400 rounded-md shadow-lg p-10">
        {
            loadedHistories.map((loadedHistory)=><div>
                <h2 className="font-bold py-7">Here is Booked Course</h2>

                    <p>Course Title: {loadedHistory.title}</p>
                    <p>Price: {loadedHistory.price}</p>
                    <Link onClick={handlePayment} className="btn btn-warning mt-10 px-5">Pay Now</Link>
            </div>)
        }
    </div>
    </>
  )
}

export default UserPurchaseHistory
