import React, { useEffect, useState } from "react";
import "../Table/index.css";
import Row from "../Row/index.jsx";
import TableSearch from "../../../../../components/TableSearch/TableSearch.jsx";
import UploadButton from "../UploadButton/UploadButton.jsx";
import { IoFilter } from "react-icons/io5";
import apiClient from "../../../../../config/apiClient.js";
import { useQuery } from "@tanstack/react-query";
import ChallengesFilter from "../ChallengesFilter/ChallengesFilter.jsx";
import { getChallengeStatus } from "../../../../../utils/getChallengeStatus.js";
import NoDataRow from "../NoDataRow/NoDataRow.jsx";

function Table() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStatus, setSelectedStatus] = useState(null);

    const {
        data: challengeData,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["assigned-challenges"],
        queryFn: () => apiClient.get("/challenge/assigned-challenges"),
        select: (data) => data.data,
    });

    // Filter challenges based on search query and status
    const filteredChallenges = challengeData?.filter((challenge) => {
        const matchesSearch = challenge.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchesStatus =
            !selectedStatus || getChallengeStatus(challenge) === selectedStatus;
        return matchesSearch && matchesStatus;
    });

    const handleFilterChange = (status) => {
        setSelectedStatus(status);
    };

    return (
        <div className="table-section">
            <div className="table-wrapper">
                <div className="table-tools">
                    <TableSearch
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        placeholder="Search challenges..."
                    />
                    <div className="upload-container">
                        <ChallengesFilter onFilterChange={handleFilterChange} />
                    </div>
                </div>
                <div className="table-content">
                    <div className="table-fields">
                        <p className="fields tasks">Tasks</p>
                        <p className="fields submission-link">
                            Submission Link
                        </p>
                        <p className="fields deadline">Deadline</p>
                        <p className="fields status">Status</p>
                        <p className="fields score">Score</p>
                        <p className="fields expand"></p>
                    </div>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="tables-rows">
                            {filteredChallenges?.length > 0 ? (
                                filteredChallenges.map((data, key) => (
                                    <Row
                                        key={key}
                                        data={data}
                                        refetch={refetch}
                                    />
                                ))
                            ) : (
                                <NoDataRow />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Table;
