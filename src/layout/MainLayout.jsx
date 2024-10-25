import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <div className="bg-slate-400">
      <div className="w-4/5 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default MainLayout
