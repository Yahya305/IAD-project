import React from "react";
import Table from "../../components/Table";
import Banner from "../../components/Banner";
import CardContainer from "../../components/CardContainer/CardContainer";

const MainDashboard = () => {
    return (
        <>
            <Banner />
            <CardContainer/>
            <Table />
        </>
    );
};

export default MainDashboard;
