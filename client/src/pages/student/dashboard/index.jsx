import React, { useState } from "react";
import "./index.css";
import Table from "./components/Table";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Search from "./components/bannerSearch";
import Sidebar from "../../../global-components/Sidebar";
import { FaHome } from "react-icons/fa";


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
    return (
        <div className="student-dashboard">
            <Sidebar routes={Routes} />
            <div className="dashboard" style={{
                position: "relative"
            }}>
                <Search />
                <Banner />
                <Table />
                {/* <Card /> */}
                {/* <Card />
            <Card />
            <Card /> */}
            </div>

        </div>
    );
}

export default StudentDashboard;
