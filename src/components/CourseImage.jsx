
const CourseImage = () => {
  return (
    <div className="bg-gray-300  mt-20 p-5 rounded-md">
      <h1 className="text-center text-2xl lg:text-4xl">Some of our Course Snaps</h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
        <div>
        <p className="text-center mb-2 font-bold">Reactive Masterclass</p>
        <img className="rounded-md shadow-lg" src="react-img-1.jpg"  alt="react" />
        </div>
        <div>
        <p className="text-center mb-2 font-bold">Python Masterclass</p>
        <img className="rounded-md shadow-lg" src="python-2.jpg"  alt="python" />
        </div>
        <div>
        <p className="text-center mb-2 font-bold">JavaScript Masterclass</p>
        <img className="rounded-md shadow-lg" src="js-course-3.jpg"  alt="JS" />
        </div>
      </div>
    </div>
  )
}

export default CourseImage
