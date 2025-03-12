import React from "react";
import Table from "../../components/Table";
import Banner from "../../components/Banner";
import Search from "../../components/bannerSearch";

const MainDashboard = () => {
    return (
        <>
            <Search />
            <Banner />
            <Table />
        </>
    );
};

export default MainDashboard;
