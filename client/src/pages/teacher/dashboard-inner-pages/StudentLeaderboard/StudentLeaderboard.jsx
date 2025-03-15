import React from "react";
import StudentLeaderboardTable from "@components/StudentLeaderboardTable/StudentLeaderboardTable";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../../config/apiClient";
import { useState } from "react";
import TableTools from "../TeamLeaderboard/components/TableTools/TableTools";

function StudentLeaderboardForTeacher() {
    const [searchQuery, setSearchQuery] = useState("");
    const [offset, setOffset] = useState(0);
    const [section, setSection] = useState("A");

    const size = 20;
    const { data } = useQuery({
        queryKey: ["fetch students leaderboard", offset, section],
        select: (data) => data.data,
        queryFn: async () => {
            return await apiClient.get(
                `/leaderboard/fetch-students-leaderboard?section=${section}&offset=${offset}&size=${size}`
            );
        },
    });

    console.log(data);

    const handleSectionChange = (e) => {
        const selectedSection = e.target.value;
        setSection(selectedSection);
    };

    const handleNextPage = () => setOffset((prev) => prev + size);
    const handlePrevPage = () => setOffset((prev) => Math.max(0, prev - size));

    return (
        <div>
            <TableTools
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSectionChange={handleSectionChange}
            />
            <StudentLeaderboardTable
                data={data}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                offset={offset}
                size={size}
            />
        </div>
    );
}

export default StudentLeaderboardForTeacher;
