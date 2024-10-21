import React from 'react'
import DashboardNavbar from '../dashboard/DashboardNavbar'
import DashboardSidebarContent from '../dashboard/DashboardSidebarContent'

const DashboradLayout = () => {
  return (
    <div>
        <DashboardNavbar></DashboardNavbar>
        <DashboardSidebarContent></DashboardSidebarContent>
    </div>
  )
}

export default DashboradLayout
