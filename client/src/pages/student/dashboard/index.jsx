import React from "react";
import "./index.css";
import Sidebar from "../../../global-components/Sidebar";
import { FaHome } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import Search from "./components/bannerSearch";

const Routes = [
    {
        path: "/student/dashboard",
        name: "Dashboard",
        icon: <FaHome />
    },
    {
        path: "/student/performance-analysis",
        name: "Performance Analysis",
        icon: <FaHome />
    },
    {
        path: "/student/std-progress",
        name: "Student Progress",
        icon: <FaHome />
    },
    {
        path: "/student/login",
        name: "Login",
        icon: <FaHome />
    },
    {
        path: "/student/signup",
        name: "Signup",
        icon: <FaHome />
    }
]

function StudentDashboard() {
    return (
        <div className="student-dashboard">
            <Sidebar routes={Routes} />
            <div className="dashboard" style={{ position: "relative" }}>
                <Search />
                <Outlet />
            </div>
        </div>
    );
}

export default StudentDashboard;
