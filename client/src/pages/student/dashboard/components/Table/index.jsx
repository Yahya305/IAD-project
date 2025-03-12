import React, { useEffect, useState } from "react";
import "../Table/index.css";
import Row from "../Row/index.jsx";
import TableSearch from "../TableSearch/TableSearch.jsx";
import UploadButton from "../UploadButton/UploadButton.jsx";
import { IoFilter } from "react-icons/io5";
import apiClient from "../../../../../config/apiClient.js";
import { useQuery } from "@tanstack/react-query";

function Table() {
    const [searchQuery, setSearchQuery] = useState("");
    
    const {
        data: challengeData,
        isLoading,
        refetch,
    } = useQuery({
        queryFn: () => apiClient.get("/challenge/assigned-challenges"),
        select: (data) => data.data,
    });

    // Filter challenges based on search query
    const filteredChallenges = challengeData?.filter(challenge => 
        challenge.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="table-section">
            <div className="table-wrapper">
                <div className="table-tools">
                    <TableSearch 
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
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
                            {filteredChallenges?.map((data, key) => (
                                <Row key={key} data={data} refetch={refetch} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Table;
