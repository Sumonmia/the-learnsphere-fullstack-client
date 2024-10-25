import { Helmet } from "react-helmet-async"
import Banner from "../components/Banner"
import CourseImage from "../components/CourseImage"
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"
import CourseCategoryCard from "../components/CourseCategoryCard"
import Faq from "../components/Faq"



const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>LearnSphere | Home</title>
    </Helmet>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <CourseCategoryCard></CourseCategoryCard>
        <CourseImage></CourseImage>
        <Faq></Faq>
        <Footer></Footer>
      </div>
    </>
  )
}

export default HomePage
