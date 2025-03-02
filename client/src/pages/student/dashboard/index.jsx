import React, { useState } from "react";
import "./index.css";
import Table from "./components/Table";
import Card from "./components/Card";

function StudentDashboard() {
    const [count, setCount] = useState(5);

    return (
        <div>
            {/* <Banner /> */}
            <Table />
            <Card />
            <Card />
            <Card />
            <Card />
            
        </div>
    );
}

export default StudentDashboard;
