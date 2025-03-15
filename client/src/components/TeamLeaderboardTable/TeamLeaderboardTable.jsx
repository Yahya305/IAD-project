import React from "react";
import "./TeamLeaderboardTable.css";

function TeamLeaderboardTable({data}) {
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
                    {data?.length === 0 && (
                        <tr>
                            <td colSpan="3" className="placeholder-row">No data available</td>
                        </tr>
                    )}
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

export default TeamLeaderboardTable;
