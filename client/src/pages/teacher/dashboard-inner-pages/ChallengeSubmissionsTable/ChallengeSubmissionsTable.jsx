import React, { useState } from "react";
import "./ChallengeSubmissionsTable.css";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@config/apiClient";
import SubmissionTableTools from "./components/TableTools/SubmissionTableTools";

function ChallengeSubmissionsTable() {
    const [searchQuery, setSearchQuery] = useState("");
    const [offset, setOffset] = useState(0);
    const [section, setSection] = useState("A");

    const size = 20;
    const { data } = useQuery({
        queryKey: ["fetch challenge submissions", offset, section],
        select: (data) => data.data,
        queryFn: async () => {
            return await apiClient.get(
                `/challenge/submissions?section=${section}&offset=${offset}&size=${size}`
            );
        },
    });

    console.log(data,"-=--=-=-=-")

    const handleSectionChange = (e) => {
        const selectedSection = e.target.value;
        setSection(selectedSection);
    };

    const handleNextPage = () => setOffset((prev) => prev + size);
    const handlePrevPage = () => setOffset((prev) => Math.max(0, prev - size));
    return (
        <div className="challenge-submissions-table">
            <SubmissionTableTools
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSectionChange={handleSectionChange}
            />
            <div className="table-container">
                <table cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>Competition Name</th>
                            <th>Challenge Name</th>
                            <th>Team Name</th>
                            <th>Submission Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length === 0 && (
                            <tr>
                                <td colSpan="4" style={{ textAlign: "center" }}>
                                    No submissions found
                                </td>
                            </tr>
                        )}
                        {data?.map((submission) => (
                            <tr key={submission?.submissionId}>
                                <td>{submission?.challenge?.competition?.competitionName}</td>
                                <td>{submission?.challenge?.name}</td>
                                <td>{submission?.teamId}</td>
                                <td>{new Date(submission?.submissionDate).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={offset === 0}>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={data?.length < size}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default ChallengeSubmissionsTable;
