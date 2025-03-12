import React from 'react';
import './ChallengesFilter.css';

const ChallengesFilter = ({ onFilterChange }) => {
    // Status options based on our badge logic
    const statusOptions = [
        { value: "all", label: "All Status" },
        { value: "Submitted", label: "Submitted" },
        { value: "In Progress", label: "In Progress" },
        { value: "Missed Deadline", label: "Missed Deadline" }
    ];

    const handleSelectChange = (e) => {
        const selectedStatus = e.target.value;
        onFilterChange(selectedStatus === "all" ? null : selectedStatus);
    };

    return (
        <div className="filter-select-container">
            <select 
                className="challenge-select"
                onChange={handleSelectChange}
                defaultValue="all"
            >
                {statusOptions.map((status) => (
                    <option key={status.value} value={status.value}>
                        {status.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ChallengesFilter;
