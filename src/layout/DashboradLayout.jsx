import React from 'react'
import DashboardNavbar from '../dashboard/DashboardNavbar'
import DashboardSidebarContent from '../dashboard/DashboardSidebarContent'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const DashboradLayout = () => {
  return (
    <>
    <Helmet>
      <title>
        LS | Dashboard
      </title>
    </Helmet>
    <div>
      <DashboardNavbar></DashboardNavbar>
    </div>
    <div className="block lg:flex bg-gray-500">
      <div>
        <DashboardSidebarContent></DashboardSidebarContent>
      </div>
      <div className='w-3/4 min-h-screen text-center pl-20'>
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default DashboradLayout
