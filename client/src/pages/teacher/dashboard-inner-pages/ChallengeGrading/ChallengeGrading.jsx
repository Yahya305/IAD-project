import React, { useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "@config/apiClient";
import "./ChallengeGrading.css";
import { useQuery } from "@tanstack/react-query";

function ChallengeGrading() {
    const { challengeId } = useParams();
    const [grades, setGrades] = useState({});

    const { data: challengeData } = useQuery({
        queryKey: ["challenge-details", challengeId],
        queryFn: () =>
            apiClient.get(`/challenge/challenge-details/${challengeId}`),
        select: (data) => data.data,
    });

    const handleGradeChange = (teamId, studentSeatNo, value) => {
        setGrades((prev) => ({
            ...prev,
            [teamId]: {
                ...prev[teamId],
                [studentSeatNo]: value,
            },
        }));
    };

    console.log(grades)

    const handleSubmitGrades = async () => {
        try {
            await apiClient.post(`/challenge/submit-grades/${challengeId}`, {
                grades,
            });
            alert("Grades submitted successfully!");
        } catch (error) {
            console.error("Error submitting grades:", error);
            alert("Failed to submit grades. Please try again.");
        }
    };

    const getTeamSubmission = (teamId) => {
        return challengeData?.challengeSubmissions?.find(
            (submission) => submission.teamId === teamId
        );
    };

    if (!challengeData) return <div className="loading">Loading...</div>;

    return (
        <div className="challenge-grading-page">
            <div className="challenge-header">
                <h1>{challengeData.name}</h1>
                <p className="description">{challengeData.description}</p>
                <div className="challenge-meta">
                    <span>
                        Competition: {challengeData.competition.competitionName}
                    </span>
                    <span>
                        Deadline: {new Date(challengeData.deadline).toLocaleDateString()}
                    </span>
                    <span>Status: {challengeData.status}</span>
                </div>
            </div>

            <div className="teams-grid">
                {challengeData.teams.map((team) => {
                    const submission = getTeamSubmission(team.teamId);
                    return (
                        <div key={team.teamId} className="team-card">
                            <div className="team-header">
                                <h2>Team {team.teamNumber} - Section {team.section}</h2>
                                {submission && (
                                    <span className="submission-date">
                                        Submitted:{" "}
                                        {new Date(submission.submissionDate).toLocaleDateString()}
                                    </span>
                                )}
                            </div>

                            <div className="team-members">
                                {team.students.map((student) => (
                                    <div
                                        key={student.seatNo}
                                        className="member-grading"
                                    >
                                        <div className="member-info">
                                            <span className="member-name">
                                                {student.name}
                                            </span>
                                            <span className="member-roll">
                                                {student.seatNo}
                                            </span>
                                        </div>
                                        <div className="grading-input">
                                            <label>Grade:</label>
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                value={
                                                    grades[team.teamId]?.[
                                                        student.seatNo
                                                    ] || ""
                                                }
                                                onChange={(e) =>
                                                    handleGradeChange(
                                                        team.teamId,
                                                        student.seatNo,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {submission && (
                                <div className="team-submission">
                                    <h3>{submission.title}</h3>
                                    <p>{submission.description}</p>
                                    {submission.projectURL && (
                                        <a
                                            href={submission.projectURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="submission-link"
                                        >
                                            View Project
                                        </a>
                                    )}
                                    {submission.score !== null && (
                                        <div className="current-score">
                                            Current Score: {submission.score}
                                        </div>
                                    )}
                                </div>
                            )}
                            {!submission && (
                                <div className="team-submission">
                                    <p className="no-submission">No submission yet</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="grading-actions">
                <button
                    onClick={handleSubmitGrades}
                    className="submit-grades-btn"
                >
                    Submit All Grades
                </button>
            </div>
        </div>
    );
}

export default ChallengeGrading;
