import React from 'react'
import Sidebar from '../../../global-components/Sidebar'
import { FaHome } from 'react-icons/fa'
import DashboardSearchBar from '../../../global-components/DashboardSearchBar'
import { Outlet } from 'react-router'

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
  return (
    <div className="teacher-dashboard dashboard-structure">
      <Sidebar routes={Routes} />
      <div className="dashboard" style={{ position: "relative", display: "flex", flexDirection: "column" }}>
        <DashboardSearchBar />
        <Outlet />
      </div>
    </div>
  )
}

export default TeacherDashboardStructure
