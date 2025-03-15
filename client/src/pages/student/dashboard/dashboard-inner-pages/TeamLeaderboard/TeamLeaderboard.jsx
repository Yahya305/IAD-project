import React, { useState } from "react";
import "./TeamLeaderboard.css";
import apiClient from "@/config/apiClient.js";
import { useQuery } from "@tanstack/react-query";
import "./TeamLeaderboard.css";

function TeamLeaderboard() {
    const [offset, setOffset] = useState(0);

    const { data } = useQuery({
        queryKey: ["fetch-team-leaderboard", offset],
        select: (data) => data.data,
        queryFn: async () => {
            return await apiClient.get(
                `/leaderboard/fetch-team-leaderboard?section=B`
            );
        },
    });

    console.log(data);
    return (
        <div className="table-container">
            <table cellSpacing="0" cellPadding="0">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Team Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((team, i) => (
                        <tr key={team?.teamId}>
                            <td>{i + 1}</td>
                            <td>{team?.teamId}</td>
                            <td>{team?.totalScore}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeamLeaderboard;
