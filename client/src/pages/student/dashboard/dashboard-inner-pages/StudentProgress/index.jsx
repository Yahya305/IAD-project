import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../../../config/apiClient.js";
import "./index.css";

const StudentProgress = () => {
    const [offset, setOffset] = useState(0);
    const size = 20;

    const { data } = useQuery({
        queryKey: ["fetch-all-students", offset],
        select: data => data.data,
        queryFn: async () => {
            return await apiClient.get(`/student/all?offset=${offset}&size=${size}`);
        }
    });

    const handleNextPage = () => setOffset(prev => prev + size);
    const handlePrevPage = () => setOffset(prev => Math.max(0, prev - size));

    return (
        <div className="StudentProgress">
            <div className="head">
                <div className="input">
                    <div className="icon">
                        <IoSearchOutline />
                    </div>
                    <input type="text" placeholder="Search here..." />
                </div>
                <div className="actions"></div>
            </div>
            <div className="table-container">
                <table cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>Student's Name</th>
                            <th>Seat No</th>
                            <th>Section</th>
                            <th>Group</th>
                            <th>Overall Score</th>
                            <th>Best Score</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((student) => (
                            <tr key={student?.id}>
                                <td>{student?.name}</td>
                                <td>{student?.seatNo}</td>
                                <td>{student?.section}</td>
                                <td>{student?.teamId}</td>
                                <td>{student?.overallScore}</td>
                                <td>{student?.bestScore}</td>
                                <td>{student?.progress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={offset === 0}>Previous</button>
                <button onClick={handleNextPage} disabled={data?.length < size}>Next</button>
            </div>
        </div>
    );
};

export default StudentProgress;
