import React, { useState } from "react";
import "./index.css";
import Table from "./components/Table";
import Banner from "./components/Banner";
import Search from "./components/bannerSearch";
import Sidebar from "../../../global-components/Sidebar";
import { FaHome } from "react-icons/fa";
import UploadChallengeSubmission from "./components/UploadChallengeSubmission";


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
    }
]

function StudentDashboard() {
    const [Modals, _SET_MODALS] = useState({
        UploadChallengeSubmission: true
    })
    const setModal = (name, value) => {
        _SET_MODALS(p => ({ ...p, [name]: value }))
    }
    return (
        <div className="student-dashboard">
            <Sidebar routes={Routes} />
            <div className="dashboard" style={{ position: "relative" }}>
                <Search />
                <Banner />
                <Table />
                {
                    Modals.UploadChallengeSubmission &&
                    <UploadChallengeSubmission 
                        close={() => setModal("UploadChallengeSubmission", false)} 
                    />
                }
            </div>

        </div>
    );
}

export default StudentDashboard;
