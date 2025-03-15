import React, { useEffect, useState } from "react";
import TeamLeaderboardTable from "@components/TeamLeaderboardTable/TeamLeaderboardTable";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@config/apiClient";
import TableTools from "./components/TableTools/TableTools";

function TeacherTeamLeaderboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [section, setSection] = useState("A");
    const [filteredData, setFilteredData] = useState([]);
    const { data } = useQuery({
        queryKey: ["fetch-team-leaderboard", section],
        select: (data) => data.data,
        queryFn: async () => {
            return await apiClient.get(
                `/leaderboard/fetch-team-leaderboard?section=${section}`
            );
        },
    });

    const handleSectionChange = (e) => {
        const selectedSection = e.target.value;
        setSection(selectedSection);
    };

    useEffect(() => {
        if (data) {
            const filteredData = data?.filter((item) =>
                item.teamId.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filteredData);
        }
    }, [data, searchQuery]);

    return (
        <div>
            <TableTools
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSectionChange={handleSectionChange}
            />
            <TeamLeaderboardTable data={filteredData} />
        </div>
    );
}

export default TeacherTeamLeaderboard;
