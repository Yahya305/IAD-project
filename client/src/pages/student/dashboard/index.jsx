import React, { useState } from "react";
import "./index.css";
import Sidebar from "../../../global-components/Sidebar";
import { FaHome } from "react-icons/fa";
import UploadChallengeSubmission from "./components/UploadChallengeSubmission";
import { AnimatePresence } from "framer-motion";
import { Outlet } from 'react-router-dom';



const Routes = [
    {
        path: "/student/dashboard",
        name: "Dashboard",
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
    },
    {
        path: "/student/performance-analysis",
        name: "Performance Analysis",
        icon: <FaHome />
    }
]

function StudentDashboard() {

    return (
        <div className="student-dashboard">
            <Sidebar routes={Routes} />
            <div className="dashboard" style={{ position: "relative" }}>
                <Outlet />
                <AnimatePresence>
                    {
                        Modals.UploadChallengeSubmission &&
                        <UploadChallengeSubmission
                            close={() => setModal("UploadChallengeSubmission", false)}
                        />
                    }
                </AnimatePresence>
            </div>

        </div>
    );
}

export default StudentDashboard;
