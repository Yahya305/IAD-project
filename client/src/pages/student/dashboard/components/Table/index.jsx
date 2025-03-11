import React, { useEffect, useState } from "react";
import "../Table/index.css";
import Row from "../Row/index.jsx";
import TableSearch from "../TableSearch/TableSearch.jsx";
import UploadButton from "../UploadButton/UploadButton.jsx";
import { IoFilter } from "react-icons/io5";
import apiClient from "../../../../../config/apiClient.js";

function Table() {
    const [challengeData, setChallengeData] = useState();
    const fetchTeamChallenges = async () => {
        const res = await apiClient.get(
            "/challenge/challenges-in-competition/f9e0c69a-4a13-4a2f-a18f-3cc10e608f70"
        );
        const challengeData = res.data;
        console.log(challengeData);
        setChallengeData(challengeData);
    };

    useEffect(() => {
        fetchTeamChallenges();
    }, []);
    return (
        <div className="table-section">
            <div className="table-wrapper">
                <div className="table-tools">
                    <TableSearch />
                    <div className="upload-container">
                        <IoFilter size={25} />
                        <UploadButton />
                    </div>
                </div>
                <div className="table-content">
                    <div className="table-fields">
                        <div className="field-wrapper">
                            <p className="fields tasks">Tasks</p>
                            <p className="fields submission-link">
                                Submission Link
                            </p>
                            <p className="fields deadline">Deadline</p>
                            <p className="fields status">Status</p>
                            <p className="fields score">Score</p>
                            <p className="fields expand"></p>
                        </div>
                    </div>
                    <div className="tables-rows">
                        <Row />
                        <Row />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
