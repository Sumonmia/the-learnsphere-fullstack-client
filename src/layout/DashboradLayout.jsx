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
    <div className='w-full'>
    <div className="grid grid-cols-1 lg:grid-cols-4 bg-gray-500">
      <div className='col-span-1'>
        <DashboardSidebarContent></DashboardSidebarContent>
      </div>
      <div className='col-span-3 min-h-screen text-center px-5'>
        <Outlet />
      </div>
    </div>
    </div>

    </>
  )
}

export default DashboradLayout
