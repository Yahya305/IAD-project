import React, { useState } from "react";
import "./TeamLeaderboard.css";
import apiClient from "@/config/apiClient.js";
import { useQuery } from "@tanstack/react-query";
import "./TeamLeaderboard.css";
import TeamLeaderboardTable from "../../../../../components/TeamLeaderboardTable/TeamLeaderboardTable";

function TeamLeaderboard() {

    const { data } = useQuery({
        queryKey: ["fetch-team-leaderboard"],
        select: (data) => data.data,
        queryFn: async () => {
            return await apiClient.get(
                `/leaderboard/fetch-team-leaderboard?section=B`
            );
        },
    });

    console.log(data);
    return (
        <>
            <TeamLeaderboardTable data={data} />
        </>
    );
}

export default TeamLeaderboard;
