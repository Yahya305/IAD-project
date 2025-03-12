import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import "./index.css";

const StudentProgress = () => {
    return (
        <div className="StudentProgress">
            <div className="head">
                <div className="input">
                    <div className="icon">
                        <IoSearchOutline />
                    </div>
                    <input type="text" placeholder="Search here..."/>
                </div>
                <div className="actions"></div>
            </div>
            <table cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th>Student’s Name</th>
                        <th>Seat No</th>
                        <th>Section</th>
                        <th>Group</th>
                        <th>Overall Score</th>
                        <th>Best Score</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>101</td>
                        <td>A</td>
                        <td>Blue</td>
                        <td>85%</td>
                        <td>92%</td>
                        <td>Improving</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StudentProgress;
