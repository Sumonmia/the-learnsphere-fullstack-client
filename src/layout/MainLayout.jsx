import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout
