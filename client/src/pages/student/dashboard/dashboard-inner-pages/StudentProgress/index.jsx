import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/config/apiClient.js";
import "./index.css";
import StudentLeaderboardTable from "@components/StudentLeaderboardTable/StudentLeaderboardTable";

const StudentProgress = () => {
    const [offset, setOffset] = useState(0);
    const size = 20;

    const { data } = useQuery({
        queryKey: ["fetch-all-students", offset],
        select: (data) => data.data,
        queryFn: async () => {
            return await apiClient.get(
                `/leaderboard/fetch-students-leaderboard?section=B&offset=${offset}&size=${size}`
            );
        },
    });

    const handleNextPage = () => setOffset((prev) => prev + size);
    const handlePrevPage = () => setOffset((prev) => Math.max(0, prev - size));

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
            <StudentLeaderboardTable
                data={data}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                offset={offset}
                size={size}
            />
        </div>
    );
};

export default StudentProgress;
