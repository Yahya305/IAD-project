import React, { useEffect, useState } from "react";
import "../Table/index.css";
import Row from "../Row/index.jsx";
import TableSearch from "../TableSearch/TableSearch.jsx";
import UploadButton from "../UploadButton/UploadButton.jsx";
import { IoFilter } from "react-icons/io5";
import apiClient from "../../../../../config/apiClient.js";
import { useQuery } from "@tanstack/react-query";

function Table() {
    const { data: challengeData, isLoading } = useQuery({
        queryFn: () => apiClient.get("/challenge/assigned-challenges"),
        select: (data) => data.data,
    });

    // console.log(challengeData);
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
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="tables-rows">
                            {challengeData.map((data, key) => (
                                <Row key={key} data={data} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Table;
