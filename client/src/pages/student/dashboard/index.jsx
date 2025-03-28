import React from "react";
import "./index.css";
import { FaHome } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { AiOutlineTeam } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import DashboardStructure from "../../../components/DashboardStructure";
import { motion } from "framer-motion";
import Sidebar from "../../../components/Sidebar";
import DashboardSearchBar from "../../../components/DashboardSearchBar";

export const StudentRoutes = [
    {
        path: "/student/dashboard",
        name: "Dashboard",
        icon: <FaHome />,
    },
    // {
    //     path: "/student/performance-analysis",
    //     name: "Performance Analysis",
    //     icon: <FaHome />,
    // },
    {
        path: "/student/std-progress",
        name: "Student Leaderboard",
        icon: <PiStudentBold />,
    },
    {
        path: "/student/team-leaderboard",
        name: "Team Leaderboard",
        icon: <AiOutlineTeam />,
    },
    // {
    //     path: "/student/login",
    //     name: "Logout",
    //     icon: <FaHome />,
    // },
    // {
    //     path: "/student/signup",
    //     name: "Signup",
    //     icon: <FaHome />,
    // },
];

function StudentDashboard({ routes: Routes }) {
    return (
        <DashboardStructure>
            <Sidebar routes={Routes} />
            <motion.div className="dashboard-page" animate={{ width: "100vw" }}>
                <DashboardSearchBar />
                <div className="dashboard-page-content">
                    <Outlet />
                </div>
            </motion.div>
        </DashboardStructure>
    );
}

export default StudentDashboard;
