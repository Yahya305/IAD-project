import React from "react";
import Table from "../../components/Table";
import Banner from "../../components/Banner";
import "./index.css";

const MainDashboard = () => {
    return (
        <div className="main-dashboard">
            <Banner />
            <Table />
        </div>
    );
};

export default MainDashboard;
