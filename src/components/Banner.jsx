import { Link } from "react-router-dom"


const Banner = () => {
    return (
        <div>
            <div className="hero bg-gray-300 p-7 p-5 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="courses-img.jpg" className="max-w-sm w-3/4 lg:w-full rounded-lg shadow-xl" />
                    <div>
                        <h1 className="lg:text-4xl font-bold text-2xl text-center">Unlock Your Potential with Expert-Led Courses</h1>
                        <p className="lg:py-6 sm:text-center sm:text-sm">
                            Found the course that speaks to you? Our seamless and secure enrollment process allows you to get started in just a few clicks.
                        </p>
                        <div className="text-center">
                            <Link to="/courses" className="btn btn-accent mt-3">See Courses</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
