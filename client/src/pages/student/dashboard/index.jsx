import React, { useState } from "react";
import "./index.css";
import Table from "./components/Table";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Search from "./components/bannerSearch";
import SideBar from "./components/SideBar";
function StudentDashboard() {
    return (
        <div>
            <SideBar />
            <Search />
            <Banner />
            <Table />
            <Card />
            {/* <Card />
            <Card />
            <Card /> */}
            
        </div>
    );
}

export default StudentDashboard;
