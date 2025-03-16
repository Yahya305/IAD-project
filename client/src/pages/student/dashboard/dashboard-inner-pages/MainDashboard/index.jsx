import React from "react";
import Table from "../../components/Table";
import Banner from "../../components/Banner";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./index.css";

const MainDashboard = () => {
    return (
        <div className="main-dashboard" style={{position:"relative"}}>
            <Banner />
            <CardContainer/>
            <Table />
        </div>
    );
};

export default MainDashboard;
