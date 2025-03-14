import React from 'react'
import Sidebar from '../../../global-components/Sidebar'
import { FaHome } from 'react-icons/fa'
import DashboardSearchBar from '../../../global-components/DashboardSearchBar'
import { Outlet } from 'react-router'
import DashboardStructure, { useDashboardStatus } from '../../../global-components/DashboardStructure'

const Routes = [
  {
    path: "/teacher/dashboard",
    name: "Dashboard",
    icon: <FaHome />
  },
  {
    path: "/teacher/student-grading",
    name: "Student Grading",
    icon: <FaHome />
  },
  {
    path: "/teacher/challenge-entry",
    name: "Challenge Entry",
    icon: <FaHome />
  }
]
function TeacherDashboardStructure() {
  const status = useDashboardStatus()
  console.log(status)
  return (
    <DashboardStructure>
      <Sidebar routes={Routes} />
      {status && <div className="dashboard-page">
        <DashboardSearchBar />
        <div className="dashboard-page-content">
          <Outlet />
        </div>
      </div>}
    </DashboardStructure>
  )
}

export default TeacherDashboardStructure
